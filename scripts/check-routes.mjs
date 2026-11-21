import assert from "node:assert/strict";

const base = process.env.CHECK_BASE_URL || "http://127.0.0.1:3000";
const visited = new Map();
const queue = ["/"];
const links = [];
while (queue.length) {
  const path = queue.shift();
  if (visited.has(path)) continue;
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, `${path} must return 200`);
  const html = await response.text();
  assert.equal([...html.matchAll(/<h1\b/g)].length, 1, `${path} must have one H1`);
  assert.ok(html.includes('name="description"'), `${path} must have a description`);
  visited.set(path, html);
  for (const [, raw] of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = raw.replaceAll("&amp;", "&");
    if (!href.startsWith("/") && !href.startsWith("#")) continue;
    const url = new URL(href, `${base}${path}`);
    links.push(url);
    if (!visited.has(url.pathname) && !queue.includes(url.pathname)) queue.push(url.pathname);
  }
}
for (const link of links) if (link.hash) assert.ok(visited.get(link.pathname)?.includes(`id="${decodeURIComponent(link.hash.slice(1))}"`), `Missing anchor ${link.pathname}${link.hash}`);
for (const route of ["/about", "/services", "/sectors", "/approach", "/work", "/insights", "/contact", "/privacy"]) assert.ok(visited.has(route), `${route} must be reachable`);
assert.equal([...visited.keys()].filter(path => path.startsWith("/insights/")).length, 4);
const missing = await fetch(`${base}/this-page-does-not-exist`);
assert.equal(missing.status, 404);
assert.ok((await missing.text()).includes("Page not found"));
for (const asset of ["/icon.png", "/apple-icon.png", "/opengraph-image.png", "/brand/eye-mark.webp", "/brand/logo-original.jpg", "/images/dhaka-river-market.webp", "/images/dhaka-street-market.webp", "/images/chandpur-landscape.webp", "/images/bangladesh-rice-fields.webp", "/images/bangladesh-kans-grass.webp", "/images/dhaka-market-street.webp", "/images/dhaka-fruit-market.webp", "/images/bangladesh-harvest.webp", "/sitemap.xml", "/robots.txt"]) assert.equal((await fetch(`${base}${asset}`)).status, 200, asset);
const unconfigured = await fetch(`${base}/api/contact`, { method: "POST", headers: { Origin: base, "Content-Type": "application/json" }, body: "{}" });
assert.equal(unconfigured.status, 503, "This check is intended for an unconfigured local server");
const external = await fetch(`${base}/api/contact`, { method: "POST", headers: { Origin: "https://untrusted.example", "Content-Type": "application/json" }, body: "{}" });
assert.equal(external.status, 403);
console.log(`Passed: ${visited.size} content routes, ${links.length} internal links/anchors, 404, 15 assets/SEO routes, unavailable contact and origin rejection.`);
