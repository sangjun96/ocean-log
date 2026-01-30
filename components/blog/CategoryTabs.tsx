import { blogCategories } from "@/app/text/blog";
import { DEFAULT_CATEGORY } from "@/app/constants/blog";
import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  activeCategory?: string;
};

export function CategoryTabs({ activeCategory = DEFAULT_CATEGORY }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2">
      {blogCategories.map((category) => {
        const isActive = category === activeCategory;
        return (
          <button
            key={category}
            className={cn(
              "rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "border-primary/70 bg-primary/10 text-primary"
                : "bg-background text-muted-foreground hover:text-foreground"
            )}
            type="button"
            aria-pressed={isActive}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
