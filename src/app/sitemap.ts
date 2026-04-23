import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const baseUrl = siteConfig.domain;

const staticRoutes = [
  "",
  "/estimate",
  "/contact",
  "/about",
  "/services/interior",
  "/services/exterior",
  "/services/powerwashing",
  "/services/turnover",
  "/services/commercial",
  "/services/carpentry",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: now,
  }));

  return staticEntries;
}
