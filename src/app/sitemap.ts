import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  return [
    { path: "", priority: 1 },
    { path: "/experience", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/faq", priority: 0.6 },
    { path: "/apply", priority: 0.8 },
    { path: "/italy", priority: 0.9 },
  ].map(({ path, priority }) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    priority,
  }));
}
