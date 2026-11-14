import test from "node:test";
import assert from "node:assert/strict";
import { loadNews, newsFeeds, parseNewsFeed } from "../src/lib/news.ts";

const now = Date.parse("2026-11-14T06:00:00Z");
const recent = "Sat, 14 Nov 2026 10:00:00 +0600";
function item(title, link = "https://www.tbsnews.net/economy/story", date = recent) {
  return `<item><title>${title}</title><link>${link}</link><pubDate>${date}</pubDate></item>`;
}
const rss = items => `<rss version="2.0"><channel>${items}</channel></rss>`;

test("news normalizes publisher markup and excludes irrelevant, stale, future, or unsafe items", () => {
  const xml = rss([
    item("<![CDATA[<b>Consumer markets &amp; livelihoods</b>]]>"),
    item("Football final tonight"),
    item("Market news", "javascript:alert(1)"),
    item("Market news", "https://untrusted.example/story"),
    item("Market news", "https://www.tbsnews.net.evil.example/story"),
    item("Market news", "https://user:pass@www.tbsnews.net/story"),
    item("Old economy report", undefined, "Thu, 01 Jan 2026 00:00:00 GMT"),
    item("Future economy report", undefined, "Sun, 15 Nov 2026 00:00:00 GMT"),
    item("Undated research report", undefined, "invalid"),
  ].join(""));
  const articles = parseNewsFeed(xml, newsFeeds[0], now);
  assert.equal(articles.length, 1);
  assert.equal(articles[0].source, "The Business Standard");
  assert.equal(articles[0].publishedAt, "2026-11-14T04:00:00.000Z");
  assert.ok(!articles[0].title.includes("<"));
  const nested = parseNewsFeed(rss(item('<a href="/story">Research on rural livelihoods</a>', "https://www.thedailystar.net/story")), newsFeeds[1], now);
  assert.equal(nested[0].title, "Research on rural livelihoods");
  assert.throws(() => parseNewsFeed('<!DOCTYPE rss [<!ENTITY x "test">]><rss/>', newsFeeds[0], now));
  assert.throws(() => parseNewsFeed("<rss><channel>", newsFeeds[0], now));
});

test("digest tolerates one failed publisher, deduplicates, sorts newest first and caps at three", async () => {
  const digest = await loadNews(async url => {
    if (url === newsFeeds[1].url) throw new Error("Publisher offline");
    if (url === newsFeeds[2].url) return new Response(rss(item("Climate research report", "https://www.thedailystar.net/climate", "Sat, 14 Nov 2026 11:00:00 +0600")));
    return new Response(rss([
      item("Consumer markets survey"),
      item("Consumer markets survey", "https://www.tbsnews.net/duplicate"),
      item("Rural employment study", "https://www.tbsnews.net/jobs"),
      item("Development research", "https://www.tbsnews.net/development"),
    ].join("")));
  }, now);
  assert.equal(digest.articles.length, 3);
  assert.equal(digest.articles[0].title, "Climate research report");
  assert.equal(digest.articles[1].title, "Consumer markets survey");
  assert.equal(digest.articles[2].title, "Rural employment study");
  assert.equal(digest.checkedAt, new Date(now).toISOString());
});

test("outages and empty feeds fail without caching fabricated or stale headlines", async () => {
  await assert.rejects(loadNews(async () => new Response("offline", { status: 503 }), now));
  await assert.rejects(loadNews(async () => new Response(rss("")), now));
});
