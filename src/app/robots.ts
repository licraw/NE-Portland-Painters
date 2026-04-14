import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const baseUrl = siteConfig.domain;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
