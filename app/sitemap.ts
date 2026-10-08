import type { MetadataRoute } from "next";
import { SITE_URL, canonicalUrl, pages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [pages.home, pages.groundcontrol, pages.privacy, pages.terms].map((page) => ({
    url: page.path === "/" ? `${SITE_URL}/` : canonicalUrl(page.path),
    lastModified: new Date("2026-10-08"),
    changeFrequency: page.path === "/" || page.path === "/groundcontrol" ? "weekly" : "yearly",
    priority: page.path === "/" ? 1 : 0.7,
  }));
}
