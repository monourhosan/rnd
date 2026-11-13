import type { MetadataRoute } from "next";
import { publicOrigin } from "@/config/site";
export default function robots(): MetadataRoute.Robots { return publicOrigin ? { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${publicOrigin}/sitemap.xml` } : { rules: { userAgent: "*", disallow: "/" } }; }
