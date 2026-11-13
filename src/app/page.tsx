import Link from "next/link";
import { CallToAction, ImageHero, InsightCard, PhotoBlock, ResearchCycle, TextLink } from "@/components/editorial";
import { photos } from "@/content/images";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { applications } from "@/content/applications";
import { sectors } from "@/content/sectors";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Research that reflects reality", "Thoughtful social and market research in Bangladesh. Understand people, communities, and markets through clear, actionable evidence.", "/");

export default function Home() {
  return <>
    <ImageHero home photo={photos.hero} title="Mirror Metrics brings people, context, and evidence together to help organizations understand communities, navigate markets, and make better-informed decisions in Bangladesh." />
    <div className="home-content container">
      <section className="purpose-banner" aria-label="Our purpose">
        <p>We begin with <mark>the people behind the question</mark> — listening to their experiences, understanding their context, and turning what we learn into <mark>evidence that decisions can use.</mark></p>
        <div className="purpose-graphic" aria-hidden="true"><span className="graphic-listen"><i /><b>Listen</b></span><span className="graphic-context"><i /><b>Understand</b></span><span className="graphic-evidence"><i /><b>Make sense</b></span></div>
      </section>
      <section className="home-approach home-section" id="perspective">
        <h2>Understanding comes before answers</h2>
        <p className="standfirst">Social understanding. Market evidence. Research built around a real decision.</p>
        <p>Mirror Metrics Research and Consultancy Ltd is a Bangladesh-based social and market research organization. We explore how people experience communities, products, programs, and services, with careful attention to the context that gives their answers meaning.</p>
        <p>Our proposed research offerings bring surveys, qualitative inquiry, evaluation, and analysis together. Each engagement starts by defining the question, choosing an appropriate method, and agreeing how the evidence will be used. <Link className="inline-link" href="/approach">Learn about our approach.</Link></p>
        <ResearchCycle />
      </section>
      <section className="home-section home-applications">
        <h2>Explore how research can inform decisions for people, communities, and markets</h2>
        <p className="illustrative-disclosure"><strong>Illustrative research applications.</strong> These scenarios show possible questions and approaches. They are not completed Mirror Metrics client assignments.</p>
        <div className="reference-project-grid">{applications.slice(0, 5).map(a => <article key={a.id}><Link href={`/work#${a.id}`} aria-label={`Explore ${a.title}`}><PhotoBlock photo={a.image} sizes="(max-width: 767px) 100vw, 320px" /></Link><p className="project-category">Illustrative / {a.category}</p><h3><Link href={`/work#${a.id}`}>{a.title}</Link></h3></article>)}</div>
        <TextLink href="/work">Explore all research applications</TextLink>
      </section>
      <section className="home-section home-capabilities">
        <h2>Research shaped around your question</h2>
        <p>A community priority, a consumer choice, or a program learning question may need different kinds of evidence. Explore the methods and potential outputs that can support your next step.</p>
        <div className="reference-services">{services.map(s => <article key={s.id}><h3><Link href={`/services#${s.id}`}>{s.title}</Link></h3><p>{s.short}</p><Link className="inline-link" href={`/services#${s.id}`}>Learn more…</Link></article>)}</div>
      </section>
      <section className="home-section home-insights">
        <h2>Ideas for asking better questions</h2>
        <p>Original editorial perspectives on research practice, inclusion, and making evidence useful. These articles discuss principles rather than report company study findings.</p>
        <div className="insight-grid">{insights.slice(0, 3).map(a => <InsightCard article={a} key={a.slug} />)}</div>
        <TextLink href="/insights">Read all our perspectives</TextLink>
      </section>
      <section className="home-section home-contexts">
        <h2>People and the contexts that shape their choices</h2>
        <p>Understanding a decision means looking at everyday experiences and the wider systems around them. These are areas of research interest, open to further exploration with potential partners.</p>
        <div className="people-grid">{[
          { title: "Agriculture & rural livelihoods", photo: photos.farming, href: "/sectors#agriculture", text: "Explore producers’ experiences, seasonal choices, and the relationships connecting livelihoods to markets." },
          { title: "Communities & essential services", photo: photos.rural, href: "/sectors#health", text: "Understand how information, travel, resources, and social context shape access to everyday services." },
          { title: "Consumers & small enterprises", photo: photos.boats, href: "/sectors#retail", text: "Look closely at the needs, decisions, and constraints of people buying, selling, and building a business." },
          { title: "Cities, skills & opportunity", photo: photos.city, href: "/sectors#education", text: "Ask how education, mobility, work, and aspirations connect within a changing urban environment." },
        ].map(s => <article key={s.href}><Link href={s.href} aria-label={`Explore ${s.title}`}><PhotoBlock photo={s.photo} sizes="(max-width: 767px) 100vw, 480px" /></Link><h3><Link href={s.href}>{s.title}</Link></h3><p>{s.text} <Link className="inline-link" href={s.href}>Learn more…</Link></p></article>)}</div>
        <div className="home-sector-links"><h3>Research questions connect across sectors:</h3><nav aria-label="Research sectors">{sectors.map(s => <Link key={s.id} href={`/sectors#${s.id}`}>{s.title}</Link>)}</nav></div>
      </section>
    </div>
    <CallToAction />
  </>;
}
