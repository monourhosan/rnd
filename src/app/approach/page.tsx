import { PageIntro, PhotoBlock, CallToAction, ApproachSteps } from "@/components/editorial";
import { photos } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Our approach", "Thoughtful study design, respectful collection, careful analysis, and clear insights.", "/approach");
const commitments = [
  ["Methods that fit", "Combine surveys, interviews, and observation around the question."],
  ["Consent & privacy", "Explain the purpose, collect only what is needed, and respect the right to decline."],
  ["Quality by design", "Pilot instruments, check consistency, and document decisions throughout."],
  ["Inclusion", "Consider language, time, mobility, and access. Be clear about whose experience is represented."],
  ["Useful findings", "Connect evidence to the decision, with uncertainty and practical next steps in view."],
];
export default function Approach() {
  return <>
    <PageIntro image={photos.paddy} eyebrow="Our approach" title="Thoughtful methods. Clearer decisions." />
    <section className="process-section section"><div className="container"><h2>From question to insight</h2><ApproachSteps detailed /></div></section>
    <section className="container section approach-principles"><div className="principles-image"><PhotoBlock photo={photos.paddy} /></div><div>
      <h2>Care at every step</h2>{commitments.map(([title, text]) => <article className="principle" key={title}><h3>{title}</h3><p>{text}</p></article>)}
    </div></section>
    <CallToAction />
  </>;
}
