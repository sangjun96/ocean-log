import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { errorText } from "@/app/text/errors";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Section className="pt-16">
          <Container className="space-y-6">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              {errorText.postNotFoundTitle}
            </h1>
            <p className="text-base text-muted-foreground">
              {errorText.postNotFoundDescription}
            </p>
            <Link
              href="/"
              className="inline-flex rounded-full border border-border px-5 py-2 text-sm font-semibold text-foreground"
            >
              {errorText.postNotFoundAction}
            </Link>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
