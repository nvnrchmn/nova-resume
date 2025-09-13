import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nvnrchmn.github.io/nova-resume/sitemap.xml",
    host: "https://nvnrchmn.github.io",
  };
}

