import type { MetadataRoute } from "next";
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

export const dynamic = "force-static";

const base = "https://durastudents.org.np";

// Every folder under app/ that contains a page.tsx becomes a URL, so new pages
// are added to the sitemap automatically.
function routes(dir: string, prefix = ""): string[] {
  const found: string[] = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("_") || name.startsWith("(") || name.startsWith("[")) continue;
    const path = `${prefix}/${name}`;
    if (readdirSync(full).includes("page.tsx")) found.push(path);
    found.push(...routes(full, path));
  }
  return found;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // /search is a tool, not content, so it stays out of the sitemap.
  const paths = ["", ...routes(join(process.cwd(), "app")).filter((p) => p !== "/search")];
  return paths.map((p) => ({
    url: `${base}${p}/`,
    changeFrequency: p === "" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p.split("/").length > 2 ? 0.5 : 0.7,
  }));
}
