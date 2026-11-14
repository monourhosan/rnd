import { unstable_cache } from "next/cache";
import { loadNews } from "@/lib/news";
import { NEWS_REFRESH_MS } from "@/lib/news-types";

export const runtime = "nodejs";

export async function GET() {
  try {
    // An hourly key makes the first request each hour await fresh reporting,
    // rather than receive the previous hour's stale-while-revalidate response.
    const getDigest = unstable_cache(() => loadNews(), ["homepage-news-v1", String(Math.floor(Date.now() / NEWS_REFRESH_MS))], { revalidate: 3600 });
    return Response.json(await getDigest(), { headers: { "Cache-Control": "no-store" } });
  } catch {
    return Response.json({ error: "News is temporarily unavailable." }, {
      status: 503,
      headers: { "Cache-Control": "no-store", "Retry-After": "300" },
    });
  }
}
