import Link from "next/link";
import { blogText } from "@/app/text/blog";
import { Post } from "@/lib/posts";
import { PostMeta } from "@/components/blog/PostMeta";
import { cn } from "@/lib/utils";

type FeaturedPostCardProps = {
  post: Post;
  className?: string;
};

export function FeaturedPostCard({ post, className }: FeaturedPostCardProps) {
  return (
    <article
      className={cn(
        "group grid gap-6 overflow-hidden rounded-[2.5rem] border border-border bg-card/80 p-8 shadow-[0_24px_60px_-40px_var(--shadow-color)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]",
        className
      )}
    >
      <div className="flex flex-col justify-between gap-6">
        <PostMeta
          date={post.date}
          readingMinutes={post.readingMinutes}
          category={post.category}
        />
        <div className="space-y-4">
          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h2>
          </Link>
          <p className="text-base leading-7 text-muted-foreground">
            {post.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2.5 py-1">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-muted">
        <div className="absolute inset-0 bg-hero" />
        <div className="relative flex h-full min-h-[220px] flex-col justify-end gap-2 p-6">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {blogText.featuredBadge}
          </span>
          <span className="text-sm font-medium text-foreground">
            {blogText.featuredCaption}
          </span>
        </div>
      </div>
    </article>
  );
}
