import type { Metadata } from "next";
import { JetBrains_Mono, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_TWITTER_HANDLE } from "@/app/constants/site";
import { siteText } from "@/app/text/site";

const bodyFont = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Noto_Serif_KR({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteText.name,
    template: `%s | ${siteText.name}`,
  },
  description: siteText.description,
  openGraph: {
    title: siteText.name,
    description: siteText.description,
    url: SITE_URL,
    siteName: siteText.name,
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_TWITTER_HANDLE,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
