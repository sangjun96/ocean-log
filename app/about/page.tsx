import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { aboutText } from "@/app/text/about";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Section className="pt-16">
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-foreground">
                {aboutText.title}
              </h1>
              <p className="text-base leading-7 text-muted-foreground sm:text-lg">
                {aboutText.description}
              </p>
              <Link
                href="/"
                className="inline-flex rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground"
              >
                {aboutText.backAction}
              </Link>
            </div>
            <div className="rounded-[2.5rem] border border-border bg-card/70 p-8">
              <h2 className="text-xl font-semibold text-foreground">
                {aboutText.highlightTitle}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {aboutText.highlightDescription}
              </p>
              <div className="mt-6 rounded-3xl border border-border bg-muted p-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {aboutText.badgeTitle}
                </span>
                <p className="mt-3 text-sm text-muted-foreground">
                  {aboutText.badgeDescription}
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
