import { PageIntro, PhotoBlock, CallToAction, TextLink } from "@/components/editorial";
import { photos } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("About us", "Bangladesh-based social and market research, guided by integrity, curiosity, and care.", "/about");
const values = [
  ["Integrity", "Be clear about evidence and its limits."],
  ["Curiosity", "Question assumptions. Explore other explanations."],
  ["Respect", "Value people’s choices, time, and privacy."],
  ["Rigor", "Match the method to the question."],
  ["Clarity", "Make findings understandable and useful."],
  ["Collaboration", "Build understanding together."],
];
export default function About() {
  return <>
    <PageIntro image={photos.women} eyebrow="About us" title="Understanding starts with people." />
    <section className="container split-text section">
      <h2>Who we are</h2>
      <div><p className="lead">Mirror Metrics Research and Consultancy Ltd is a social and market research organization based in Bangladesh.</p>
        <p>We explore how people experience communities, markets, and services, helping organizations make decisions grounded in local context.</p></div>
    </section>
    <section className="values-section section"><div className="container">
      <h2>Our principles</h2>
      <div className="values-grid">{values.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </div></section>
    <section className="container section context-feature"><PhotoBlock photo={photos.rural} /><div>
      <h2>Rooted in Bangladesh</h2>
      <p>Language, place, and everyday circumstances shape what an answer means. Our research design starts with those differences.</p>
      <TextLink href="/approach">Our approach</TextLink>
    </div></section>
    <CallToAction />
  </>;
}
