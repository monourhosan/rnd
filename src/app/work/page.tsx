import { PageIntro, PhotoBlock, CallToAction } from "@/components/editorial";
import { photos } from "@/content/images";
import { applications } from "@/content/applications";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Research applications", "Illustrative research scenarios, not completed Mirror Metrics client projects.", "/work");
export default function Work() {
  return <>
    <PageIntro image={photos.boats} eyebrow="Research applications" title="Questions worth exploring." text="Illustrative scenarios, not completed client projects." />
    <section className="container applications-list">{applications.map((a, i) => <article id={a.id} className="application-detail" key={a.id}>
      <PhotoBlock photo={a.image} priority={i === 0} /><div>
        <p className="eyebrow">{a.category}</p><h2>{a.title}</h2><p>{a.question}</p>
        <details className="content-details"><summary>Approach & potential use</summary><dl>
          <dt>Approach</dt><dd>{a.approach}</dd><dt>Potential use</dt><dd>{a.decision}</dd>
        </dl></details>
      </div>
    </article>)}</section>
    <CallToAction />
  </>;
}
