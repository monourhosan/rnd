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
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Applications", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
export const publicOrigin = (() => {
  try { const url = new URL(site.url); return url.protocol === "https:" && !/^(localhost|127\.)/.test(url.hostname) ? url.origin : undefined; }
  catch { return undefined; }
})();
