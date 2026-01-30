import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import {
  BLOG_CONTENT_PATH,
  FEATURED_POST_COUNT,
  WORDS_PER_MINUTE,
} from "@/app/constants/blog";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  featured?: boolean;
  cover?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  content: string;
  readingMinutes: number;
};

const contentDirectory = path.join(process.cwd(), BLOG_CONTENT_PATH);

function estimateReadingMinutes(content: string) {
  const words = content.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

function sortPosts(posts: Post[]) {
  return [...posts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPostSlugs() {
  const files = await fs.readdir(contentDirectory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContent = await fs.readFile(fullPath, "utf8");
  const { data, content } = matter(fileContent);
  const frontmatter = data as PostFrontmatter;

  return {
    ...frontmatter,
    slug,
    content,
    readingMinutes: estimateReadingMinutes(content),
  };
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  return sortPosts(posts);
}

export async function getFeaturedPosts() {
  const posts = await getAllPosts();
  return posts.slice(0, FEATURED_POST_COUNT);
}
