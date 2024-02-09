import { MetadataRoute } from "next";
import { allPosts } from "contentlayer/generated";

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemaps = ["", "/about", ...allPosts.map((it) => it.slug)];

  return sitemaps.map((path) => ({
    url: `https://tech.cocho.io${path}`,
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  }));
}
