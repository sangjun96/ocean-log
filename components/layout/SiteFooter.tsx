import { Container } from "@/components/layout/Container";
import { siteText } from "@/app/text/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container className="flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>{siteText.footerNote}</span>
        <span>© {new Date().getFullYear()} {siteText.name}</span>
      </Container>
    </footer>
  );
}
