import { blogText } from "@/app/text/blog";
import { formatDate } from "@/lib/format";

type PostMetaProps = {
  date: string;
  readingMinutes: number;
  category: string;
};

export function PostMeta({ date, readingMinutes, category }: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-muted-foreground">
      <span className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] uppercase tracking-wide text-foreground">
        {category}
      </span>
      <span>{formatDate(date)}</span>
      <span>
        {readingMinutes} {blogText.readingTimeSuffix}
      </span>
    </div>
  );
}
