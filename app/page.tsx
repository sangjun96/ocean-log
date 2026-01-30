import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CategoryTabs } from "@/components/blog/CategoryTabs";
import { FeaturedPostCard } from "@/components/blog/FeaturedPostCard";
import { PostCard } from "@/components/blog/PostCard";
import { SidebarCard } from "@/components/blog/SidebarCard";
import { blogText } from "@/app/text/blog";
import { siteText } from "@/app/text/site";
import { FEATURED_POST_COUNT } from "@/app/constants/blog";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = posts.slice(0, FEATURED_POST_COUNT);
  const remainingPosts = posts.slice(FEATURED_POST_COUNT);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Section className="pt-16">
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {blogText.featuredLabel}
              </span>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
                {blogText.heroTitle}
              </h1>
              <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                {blogText.heroDescription}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#latest"
                  className="rounded-full border border-primary/70 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary"
                >
                  {blogText.latestLabel}
                </Link>
                <span className="text-sm text-muted-foreground">
                  {siteText.tagline}
                </span>
              </div>
            </div>
            <div className="space-y-6 rounded-[2.5rem] border border-border bg-card/60 p-6">
              <p className="text-sm font-medium text-muted-foreground">
                {blogText.searchPlaceholder}
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <input
                  className="h-12 flex-1 rounded-full border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground"
                  placeholder={blogText.searchPlaceholder}
                  aria-label={blogText.searchPlaceholder}
                />
                <button
                  className="h-12 rounded-full border border-border bg-secondary px-6 text-sm font-semibold text-foreground"
                  type="button"
                >
                  {blogText.viewAll}
                </button>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="space-y-8">
            <CategoryTabs />
            {featuredPosts.map((post) => (
              <FeaturedPostCard key={post.slug} post={post} />
            ))}
          </Container>
        </Section>

        <Section>
          <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.35fr)]">
            <div className="space-y-6" id="latest">
              {remainingPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
            <aside className="space-y-6">
              <SidebarCard>
                <h3 className="text-lg font-semibold text-foreground">
                  {blogText.sidebarTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {blogText.sidebarDescription}
                </p>
                <Link
                  href="#latest"
                  className="mt-6 inline-flex rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  {blogText.viewAll}
                </Link>
              </SidebarCard>
              <SidebarCard className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {blogText.newsletterTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {blogText.newsletterDescription}
                  </p>
                </div>
                <div className="space-y-3">
                  <input
                    className="h-11 w-full rounded-full border border-border bg-background/70 px-4 text-sm text-foreground placeholder:text-muted-foreground"
                    placeholder={blogText.newsletterPlaceholder}
                    aria-label={blogText.newsletterPlaceholder}
                  />
                  <button
                    className="h-11 w-full rounded-full border border-primary/70 bg-primary/10 text-sm font-semibold text-primary"
                    type="button"
                  >
                    {blogText.newsletterButton}
                  </button>
                </div>
              </SidebarCard>
            </aside>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
