import type { MetadataRoute } from "next";
import { work } from "@/content/work";
import { categories } from "@/content/categories";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const lastModified = new Date();

  const present = new Set<string>();
  work.forEach((p) => p.categories.forEach((c) => present.add(c)));

  return [
    ...["", "/work", "/about", "/contact"].map((path) => ({
      url: `${base}${path}`,
      lastModified,
    })),
    ...work.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified })),
    ...categories
      .filter((c) => present.has(c.id))
      .map((c) => ({ url: `${base}/category/${c.id}`, lastModified })),
  ];
}
