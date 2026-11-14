import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/content/images";
import { insights, readingTime } from "@/content/insights";
import { photos } from "@/content/images";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) { return <span className="arrow" aria-hidden="true">{diagonal ? "↗" : "↗"}</span>; }
export function TextLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) { return <Link href={href} className={`text-link${light ? " light" : ""}`}>{children}<Arrow /></Link>; }
export function PhotoBlock({ photo, className = "", priority = false, sizes = "(max-width: 767px) 100vw, 50vw" }: { photo: Photo; className?: string; priority?: boolean; sizes?: string }) { return <div className={`photo ${className}`}><Image src={photo.src} alt={photo.alt} fill sizes={sizes} priority={priority} /></div>; }
export function ImageHero({ title, photo, eyebrow, description, home = false }: { title: React.ReactNode; photo: Photo; eyebrow?: string; description?: string; home?: boolean }) {
  return <section className={`image-hero${home ? " home-image-hero" : ""}`}><PhotoBlock photo={photo} priority sizes="100vw" /><div className="image-hero-content">{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h1>{title}</h1>{description && <p className="hero-description">{description}</p>}{home && <TextLink href="/services">Explore our services</TextLink>}</div></section>;
}
export function PageIntro({ eyebrow, title, text, image }: { eyebrow?: string; title: React.ReactNode; text?: string; image?: Photo }) { return image ? <><ImageHero title={title} photo={image} eyebrow={eyebrow} />{text && <div className="intro-summary container"><p>{text}</p></div>}</> : <section className="page-intro container">{eyebrow && <div className="eyebrow"><span className="tiny-square" />{eyebrow}</div>}<h1>{title}</h1>{text && <p>{text}</p>}</section>; }
export function SectionHeading({ eyebrow, title, text, href, link }: { eyebrow: string; title: React.ReactNode; text?: string; href?: string; link?: string }) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-description">{text}</p>}</div>{href && <TextLink href={href}>{link}</TextLink>}</div>; }
export function InsightCard({ article }: { article: (typeof insights)[number] }) { return <article className="insight-card"><Link href={`/insights/${article.slug}`} className="card-image-link" aria-label={`Read ${article.title}`}><PhotoBlock photo={article.image} /></Link><div className="card-meta"><span>{article.category}</span><span>{readingTime(article)}</span></div><h3><Link href={`/insights/${article.slug}`}>{article.title}<Arrow /></Link></h3></article>; }
export function CallToAction() { return <section className="closing container"><PhotoBlock photo={photos.hero} sizes="(max-width: 767px) 100vw, 480px" /><div><h2>Better decisions start with evidence.</h2><TextLink href="/contact">Discuss your project</TextLink></div></section>; }
export const steps = [
  { title: "Understand", full: "Understand", text: "Define the question and decision." },
  { title: "Design", full: "Design", text: "Choose methods that fit." },
  { title: "Engage", full: "Engage", text: "Listen and collect with care." },
  { title: "Analyze", full: "Analyze", text: "Verify data and examine patterns." },
  { title: "Translate", full: "Translate", text: "Turn findings into clear insights." },
  { title: "Learn", full: "Learn", text: "Agree practical next steps." },
];
export function ApproachSteps({ detailed = false }: { detailed?: boolean }) { return <ol className={`process${detailed ? " detailed" : ""}`}>{steps.map((s, i) => <li key={s.title}><span className="step-number">0{i + 1}</span><h3>{detailed ? s.full : s.title}</h3><p>{s.text}</p></li>)}</ol>; }
export function ResearchCycle() { return <div className="research-cycle"><ol aria-label="Research process" className="cycle-track">{steps.map((s, i) => <li key={s.title}><span className="cycle-number">0{i + 1}</span><strong>{s.title}</strong><span>{s.text}</span></li>)}</ol><div className="cycle-feedback"><span aria-hidden="true">↶</span>Learning informs every stage<span aria-hidden="true">↵</span></div><div className="evidence-strip"><span>A clear question</span><span>A thoughtful method</span><span>Dependable evidence</span><span>Useful next steps</span></div></div>; }
