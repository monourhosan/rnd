import { PageIntro, PhotoBlock } from "@/components/editorial";
import { ContactForm } from "@/components/contact-form";
import { contactReady, interestIds } from "@/lib/contact";
import { site } from "@/config/site";
import { photos } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata("Start a conversation", "Discuss a research question, evaluation, consumer study, or possible collaboration with Mirror Metrics in Bangladesh.", "/contact");
export default async function Contact({ searchParams }: { searchParams: Promise<{ interest?: string }> }) { const { interest } = await searchParams; const selected = interestIds.includes(interest as typeof interestIds[number]) ? interest! : ""; return <><PageIntro eyebrow="Start a conversation" title={<>Bring a question.<br /><em>Let’s explore it together.</em></>} text="A new research project, a program evaluation, a consumer question, or a possible collaboration. A useful conversation begins with what you want to understand." /><section className="container contact-layout"><aside><PhotoBlock photo={photos.rural} priority /><h2>A thoughtful starting point.</h2><p>You don’t need a finished brief. The decision you face, the people involved, and the questions on your mind are a good place to begin.</p><div className="contact-detail"><p className="eyebrow">Based in Bangladesh</p><p>Social & market research<br />Research design · Evidence · Learning</p>{site.email && <a className="text-link" href={`mailto:${site.email}`}>{site.email} ↗</a>}</div></aside><ContactForm ready={contactReady()} defaultInterest={selected} /></section></>; }
