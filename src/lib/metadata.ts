import type { Metadata } from "next";
import { publicOrigin } from "@/config/site";
export function pageMetadata(title: string, description: string, path: string): Metadata { return {
  title: path === "/" ? `${title} | Mirror Metrics` : title, description,
  ...(publicOrigin ? { alternates: { canonical: `${publicOrigin}${path}` } } : {}),
  openGraph: { title: `${title} | Mirror Metrics`, description, type: "website", ...(publicOrigin ? { url: `${publicOrigin}${path}` } : {}), images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }] },
}; }
