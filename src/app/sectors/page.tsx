import { PageIntro, PhotoBlock, CallToAction } from "@/components/editorial";
import { photos } from "@/content/images";
import { sectors } from "@/content/sectors";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Sectors", "Research interests across health, education, agriculture, inclusion, finance, climate, retail, and cities.", "/sectors");
export default function Sectors() {
  return <>
    <PageIntro image={photos.rural} eyebrow="Sectors" title="Connected lives. Wider perspectives." text="Our research interests across communities and markets." />
    <section className="container sector-detail-grid">{sectors.map((s, i) => <article id={s.id} className="sector-detail" key={s.id}>
      <PhotoBlock photo={s.image} priority={i < 2} /><h2>{s.title}</h2><p>{s.description}</p>
    </article>)}</section>
    <CallToAction />
  </>;
}
