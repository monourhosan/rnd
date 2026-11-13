export const site = {
  name: "Mirror Metrics Research and Consultancy Ltd",
  shortName: "Mirror Metrics",
  description: "Bangladesh-based social and market research. Thoughtful research, local context, and clear evidence for decisions about people, communities, and markets.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: "",
  address: "",
  socialLinks: [] as { label: string; url: string }[],
};
export const navigation = [
  { label: "What we do", href: "/services" },
  { label: "Who we are", href: "/about" },
  { label: "Research applications", href: "/work" },
  { label: "Latest insights", href: "/insights" },
  { label: "Partner with us", href: "/contact" },
];
export const publicOrigin = (() => {
  try { const url = new URL(site.url); return url.protocol === "https:" && !/^(localhost|127\.)/.test(url.hostname) ? url.origin : undefined; }
  catch { return undefined; }
})();
