import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const baseUrl = siteConfig.domain;

const staticRoutes = [
  "",
  "/estimate",
  "/contact",
  "/about",
  "/painting/interior",
  "/painting/exterior",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: now,
  }));

  return staticEntries;
}
