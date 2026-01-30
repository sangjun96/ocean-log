import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 text-2xl font-semibold tracking-tight text-foreground" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold tracking-tight text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="mt-4 text-base leading-7 text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 text-muted-foreground" {...props} />
  ),
  li: (props) => <li className="text-base leading-7" {...props} />,
  a: ({ href, ...props }) =>
    href ? (
      <Link
        href={href}
        className="font-medium text-primary underline-offset-4 hover:underline"
        {...props}
      />
    ) : (
      <a className="font-medium text-primary underline-offset-4 hover:underline" {...props} />
    ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-primary/70 pl-4 text-base italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl border border-border bg-muted/80 p-5 text-sm text-foreground"
      {...props}
    />
  ),
};
