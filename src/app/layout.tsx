import type { Metadata } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SiteMotion } from "@/components/site-motion";
import { site, publicOrigin } from "@/config/site";
import "./globals.css";
import "./motion.css";
const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Raleway({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(publicOrigin || "http://localhost:3000"),
  title: { default: "Mirror Metrics | Research that reflects reality", template: "%s | Mirror Metrics" },
  description: site.description,
  robots: { index: !!publicOrigin, follow: !!publicOrigin },
  openGraph: { title: site.shortName, description: site.description, siteName: site.shortName, locale: "en_GB", type: "website", images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}><body id="top"><a className="skip-link" href="#main-content">Skip to content</a><Header /><main id="main-content" tabIndex={-1}>{children}</main><Footer /><SiteMotion /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: site.name, description: site.description, areaServed: { "@type": "Country", name: "Bangladesh" }, ...(publicOrigin ? { url: publicOrigin } : {}) }).replace(/</g, "\\u003c") }} /></body></html>;
}
