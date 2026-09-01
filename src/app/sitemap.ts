import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    "",
    "/experience",
    "/about",
    "/faq",
    "/apply",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
  }));
}
