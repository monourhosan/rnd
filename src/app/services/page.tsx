import Link from "next/link";
import { PageIntro, CallToAction, Arrow } from "@/components/editorial";
import { services } from "@/content/services";
import { photos } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Services", "Social research, market research, evaluation, fieldwork, and analysis for Bangladesh.", "/services");
export default function Services() {
  return <>
    <PageIntro image={photos.market} eyebrow="Services" title="Research shaped around your question." />
    <div className="container services-layout section">
      <aside className="service-index"><nav aria-label="Service sections">{services.map(s => <a key={s.id} href={"#" + s.id}>{s.title}</a>)}</nav></aside>
      <div>{services.map(s => <section className="service-detail" id={s.id} key={s.id}>
        <h2>{s.title}</h2><p>{s.description}</p>
        <details className="content-details"><summary>Methods & outputs</summary><div className="method-output">
          <div><h3>Possible methods</h3><ul>{s.methods.map(m => <li key={m}>{m}</li>)}</ul></div>
          <div><h3>Potential outputs</h3><ul>{s.outputs.map(o => <li key={o}>{o}</li>)}</ul></div>
        </div></details>
        <Link className="text-link" href={"/contact?interest=" + s.id}>Enquire<Arrow /></Link>
      </section>)}</div>
    </div>
    <CallToAction />
  </>;
}
