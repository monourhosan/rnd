import { XMLParser, XMLValidator } from "fast-xml-parser";
import type { NewsArticle, NewsDigest } from "./news-types";

export const newsFeeds = [
  { url: "https://www.tbsnews.net/economy/rss.xml", source: "The Business Standard", hostname: "www.tbsnews.net", category: "Economy & markets" },
  { url: "https://www.thedailystar.net/business/rss.xml", source: "The Daily Star", hostname: "www.thedailystar.net", category: "Economy & markets" },
  { url: "https://www.thedailystar.net/environment/rss.xml", source: "The Daily Star", hostname: "www.thedailystar.net", category: "Climate & development" },
] as const;

const parser = new XMLParser({ ignoreAttributes: true, parseTagValue: false, htmlEntities: true });
const relevant = /\b(econom\w*|market\w*|consumer\w*|inflation|poverty|livelihood\w*|labou?r|worker\w*|employment|unemployment|education|health|agricultur\w*|farmer\w*|rural|climate|environment\w*|development|research|survey\w*|census|data|population|migration|gender|women|youth|inclusion|financ\w*|bank\w*|trade|export\w*|manufactur\w*|factor(?:y|ies)|garment\w*|rmg|sme\w*|enterprise\w*|business\w*|rice|food|veggies|transport|energy|renewable\w*|flood\w*)\b/i;

// Some publishers put an HTML anchor inside <title>, others use CDATA.
function plainText(value: unknown): string {
  if (typeof value === "string") return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  if (Array.isArray(value)) return value.map(plainText).join(" ").trim();
  if (value && typeof value === "object") return Object.values(value).map(plainText).join(" ").trim();
  return "";
}

export function parseNewsFeed(xml: string, feed: (typeof newsFeeds)[number], now = Date.now()): NewsArticle[] {
  // Never accept DTDs or entity declarations from an upstream feed.
  if (xml.length > 1_000_000 || /<!DOCTYPE|<!ENTITY/i.test(xml) || XMLValidator.validate(xml) !== true) {
    throw new Error("Invalid news feed");
  }
  const items = parser.parse(xml)?.rss?.channel?.item;
  if (!items) return [];
  return (Array.isArray(items) ? items : [items]).flatMap(item => {
    const title = plainText(item.title);
    const published = Date.parse(plainText(item.pubDate));
    if (!title || title.length > 350 || !relevant.test(title) || !Number.isFinite(published)
      || published > now + 5 * 60_000 || published < now - 14 * 24 * 60 * 60_000) return [];
    try {
      const url = new URL(plainText(item.link));
      if (url.protocol !== "https:" || url.hostname !== feed.hostname || url.username || url.password) return [];
      url.hash = "";
      url.search = "";
      return [{ title, url: url.href, source: feed.source, category: feed.category, publishedAt: new Date(published).toISOString() }];
    } catch { return []; }
  });
}

export async function loadNews(fetcher: typeof fetch = fetch, now = Date.now()): Promise<NewsDigest> {
  const results = await Promise.allSettled(newsFeeds.map(async feed => {
    const response = await fetcher(feed.url, {
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
    });
    if (!response.ok) throw new Error("News publisher unavailable");
    return parseNewsFeed(await response.text(), feed, now);
  }));
  const seen = new Set<string>();
  const articles = results.flatMap(result => result.status === "fulfilled" ? result.value : [])
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .filter(article => {
      const title = article.title.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
      if (seen.has(title) || seen.has(article.url)) return false;
      seen.add(title);
      seen.add(article.url);
      return true;
    }).slice(0, 3);
  // Do not cache an outage or invent headlines to fill the section.
  if (!articles.length) throw new Error("No recent relevant news available");
  return { articles, checkedAt: new Date(now).toISOString() };
}
