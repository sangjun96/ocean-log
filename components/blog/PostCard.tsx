import Link from "next/link";
import { Post } from "@/lib/posts";
import { PostMeta } from "@/components/blog/PostMeta";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group rounded-3xl border border-border bg-card/70 p-6 transition-shadow hover:shadow-[0_18px_40px_-30px_var(--shadow-color)]">
      <div className="flex flex-col gap-4">
        <PostMeta
          date={post.date}
          readingMinutes={post.readingMinutes}
          category={post.category}
        />
        <Link href={`/blog/${post.slug}`} className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="text-sm leading-7 text-muted-foreground">
            {post.description}
          </p>
        </Link>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border px-2 py-1">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
