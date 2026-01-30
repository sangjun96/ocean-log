import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/constants/site";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const postEntries = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date().toISOString(),
    },
    ...postEntries,
  ];
}
