import type { MetadataRoute } from "next";
import { publicOrigin } from "@/config/site";
import { insights } from "@/content/insights";
export default function sitemap(): MetadataRoute.Sitemap { if (!publicOrigin) return []; return ["", "/about", "/services", "/sectors", "/approach", "/work", "/insights", "/contact", "/privacy", ...insights.map(a => `/insights/${a.slug}`)].map(path => ({ url: `${publicOrigin}${path}` })); }
