export const NEWS_REFRESH_MS = 60 * 60 * 1000;

export type NewsArticle = {
  title: string;
  url: string;
  source: string;
  category: string;
  publishedAt: string;
};

export type NewsDigest = {
  articles: NewsArticle[];
  checkedAt: string;
};
