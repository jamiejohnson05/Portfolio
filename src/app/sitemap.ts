import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = ["", "/work", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const workRoutes = caseStudies.map((c) => ({
    url: `${base}/work/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...workRoutes];
}
