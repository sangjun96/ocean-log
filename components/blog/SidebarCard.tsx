import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SidebarCardProps = HTMLAttributes<HTMLDivElement>;

export function SidebarCard({ className, ...props }: SidebarCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-card/80 p-6 shadow-[0_18px_40px_-36px_var(--shadow-color)]",
        className
      )}
      {...props}
    />
  );
}
