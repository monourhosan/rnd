"use client";

import { useEffect, useState } from "react";
import { NEWS_REFRESH_MS, type NewsDigest } from "@/lib/news-types";

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Dhaka" });
const timeFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dhaka" });

export function LatestNews() {
  const [digest, setDigest] = useState<NewsDigest | null>(null);
  const [unavailable, setUnavailable] = useState(false);

  useEffect(() => {
    let disposed = false;
    let pending = false;
    let lastAttempt = 0;
    let retryAt = 0;
    const controller = new AbortController();
    async function refresh() {
      if (pending || disposed) return;
      pending = true;
      lastAttempt = Date.now();
      try {
        const response = await fetch("/api/news", { cache: "no-store", signal: controller.signal });
        if (!response.ok) throw new Error("News unavailable");
        const next: NewsDigest = await response.json();
        if (!disposed) { setDigest(next); setUnavailable(false); }
        retryAt = lastAttempt + NEWS_REFRESH_MS;
      } catch {
        if (!disposed) setUnavailable(true);
        retryAt = lastAttempt + 5 * 60_000;
      } finally { pending = false; }
    }
    void refresh();
    const timer = window.setInterval(() => {
      if (Date.now() >= retryAt) void refresh();
    }, 60_000);
    function resume() {
      if (document.visibilityState === "visible" && Date.now() >= retryAt) void refresh();
    }
    document.addEventListener("visibilitychange", resume);
    window.addEventListener("online", resume);
    return () => {
      disposed = true;
      controller.abort();
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", resume);
      window.removeEventListener("online", resume);
    };
  }, []);

  return <section className="home-section home-news" aria-labelledby="news-heading">
    <div className="news-heading">
      <div><p className="eyebrow">The wider context</p><h2 id="news-heading">In the news</h2></div>
      <span className="news-cadence"><span aria-hidden="true" />Updated hourly</span>
    </div>
    <p className="news-intro">Recent reporting on the economy, livelihoods, and development — context for our work in Bangladesh.</p>
    <div aria-live="polite" aria-atomic="true" aria-busy={!digest && !unavailable}>
      {digest ? <ol className="news-list">{digest.articles.map(article => <li key={article.url}>
        <article>
          <p className="news-category">{article.category}</p>
          <h3><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}<span aria-hidden="true"> ↗</span><span className="visually-hidden"> (opens in a new tab)</span></a></h3>
          <p className="news-meta"><span>{article.source}</span><time dateTime={article.publishedAt}>{dateFormat.format(new Date(article.publishedAt))}</time></p>
        </article>
      </li>)}</ol> : <p className="news-message">{unavailable ? "News is temporarily unavailable. Please check back shortly." : "Loading the latest reporting…"}</p>}
      <p className="news-footnote">{digest && <>Last checked <time dateTime={digest.checkedAt}>{timeFormat.format(new Date(digest.checkedAt))}</time> (Dhaka). </>}{unavailable && digest ? "Updates are temporarily delayed; showing the last available headlines. " : ""}External reporting from independent publishers.</p>
    </div>
    <noscript><p>Enable JavaScript to view automatically updated headlines.</p></noscript>
  </section>;
}
