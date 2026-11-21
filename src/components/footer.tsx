import Link from "next/link";
import { site, navigation } from "@/config/site";
export function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-top">
    <div className="footer-identity"><Link href="/" className="footer-brand">Mirror Metrics<span>.</span></Link><p>Social & market research.<br />Bangladesh.</p></div>
    <nav aria-label="Footer navigation">{navigation.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}</nav>
    <nav aria-label="Additional links"><Link href="/approach">Our approach</Link><Link href="/kajer-dhara">কাজের ধারা (বাংলা)</Link><Link href="/sectors">Sectors</Link><Link href="/privacy">Privacy</Link>
      {site.email && <a href={"mailto:" + site.email}>{site.email}</a>}{site.phone && <a href={"tel:" + site.phone}>{site.phone}</a>}
      {site.socialLinks.map(s => <a key={s.url} href={s.url} rel="noreferrer">{s.label}</a>)}
    </nav>
  </div><div className="footer-bottom"><p>© {new Date().getFullYear()} Mirror Metrics</p><a href="#top">Back to top ↑</a></div></div></footer>;
}
