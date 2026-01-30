import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PostMeta } from "@/components/blog/PostMeta";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { SITE_URL } from "@/app/constants/site";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug).catch(() => null);
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Section className="pt-16">
          <Container className="space-y-6">
            <PostMeta
              date={post.date}
              readingMinutes={post.readingMinutes}
              category={post.category}
            />
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {post.description}
            </p>
          </Container>
        </Section>
        <Section>
          <Container className="max-w-3xl">
            <MDXRemote source={post.content} components={mdxComponents} />
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}
