import { PageIntro, PhotoBlock } from "@/components/editorial";
import { ContactForm } from "@/components/contact-form";
import { contactReady, interestIds } from "@/lib/contact";
import { site } from "@/config/site";
import { photos } from "@/content/images";
import { pageMetadata } from "@/lib/metadata";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata("Contact", "Discuss a research question or collaboration with Mirror Metrics in Bangladesh.", "/contact");
export default async function Contact({ searchParams }: { searchParams: Promise<{ interest?: string }> }) {
  const { interest } = await searchParams;
  const selected = interestIds.includes(interest as typeof interestIds[number]) ? interest! : "";
  return <>
    <PageIntro title="Let’s talk." text="Tell us what you’d like to understand." />
    <section className="container contact-layout"><aside><PhotoBlock photo={photos.rural} priority />
      <p>Based in Bangladesh.</p>{site.email && <a className="text-link" href={"mailto:" + site.email}>{site.email} ↗</a>}
    </aside><ContactForm ready={contactReady()} defaultInterest={selected} /></section>
  </>;
}
