import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { blogNavLinks } from "@/app/text/blog";
import { siteText } from "@/app/text/site";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  return (
    <header className={cn("sticky top-0 z-40 border-b border-border/70", className)}>
      <div className="bg-background/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground"
          >
            {siteText.name}
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {blogNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
