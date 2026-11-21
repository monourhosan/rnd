import Link from "next/link";
import { CallToAction, ImageHero, InsightCard, PhotoBlock, TextLink } from "@/components/editorial";
import { photos } from "@/content/images";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { applications } from "@/content/applications";
import { pageMetadata } from "@/lib/metadata";
import { LatestNews } from "@/components/latest-news";
import { FieldMotionShowcase } from "@/components/field-motion";

export const metadata = pageMetadata("Research that reflects reality", "Thoughtful social and market research in Bangladesh. Understand people, communities, and markets through clear, actionable evidence.", "/");

export default function Home() {
  return <>
    <ImageHero home photo={photos.hero} title="Research that reflects reality." description="Social and market research in Bangladesh." />
    <div className="home-content container">
      <section className="home-approach home-section" id="perspective">
        <div><h2>People. Context. Evidence.</h2><p>We help organizations understand communities and markets, and turn evidence into clearer decisions.</p></div>
        <TextLink href="/about">About us</TextLink>
      </section>
      <FieldMotionShowcase />
      <section className="home-section home-applications">
        <h2>Research in practice</h2>
        <p className="illustrative-disclosure">Illustrative scenarios, not completed client projects.</p>
        <div className="reference-project-grid">{applications.slice(0, 3).map(a => <article key={a.id}><Link href={`/work#${a.id}`} aria-label={`Explore ${a.title}`}><PhotoBlock photo={a.image} sizes="(max-width: 767px) 100vw, 320px" /></Link><p className="project-category">{a.category}</p><h3><Link href={`/work#${a.id}`}>{a.title}</Link></h3></article>)}</div>
        <TextLink href="/work">View all scenarios</TextLink>
      </section>
      <section className="home-section home-capabilities">
        <h2>What we do</h2>
        <div className="reference-services">{services.map(s => <article key={s.id}><h3><Link href={`/services#${s.id}`}>{s.title}<span className="service-arrow" aria-hidden="true"> ↗</span></Link></h3><p>{s.short}</p></article>)}</div>
      </section>
      <section className="home-section home-insights">
        <h2>Perspectives</h2>
        <div className="insight-grid">{insights.slice(0, 3).map(a => <InsightCard article={a} key={a.slug} />)}</div>
        <TextLink href="/insights">All perspectives</TextLink>
      </section>
      <LatestNews />
    </div>
    <CallToAction />
  </>;
}
