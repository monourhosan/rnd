import Link from "next/link";
import { PageIntro, PhotoBlock, InsightCard, CallToAction, TextLink } from "@/components/editorial";
import { insights, readingTime } from "@/content/insights";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Perspectives", "Original perspectives on research, inclusion, and making evidence useful.", "/insights");
export default function Insights() {
  const featured = insights[0];
  return <>
    <PageIntro title="Perspectives" text="Ideas on research, people, and evidence." />
    <section className="container featured-insight"><Link href={"/insights/" + featured.slug} aria-label={"Read " + featured.title}><PhotoBlock photo={featured.image} priority /></Link><div>
      <p className="eyebrow">{readingTime(featured)}</p><h2><Link href={"/insights/" + featured.slug}>{featured.title}</Link></h2>
      <TextLink href={"/insights/" + featured.slug}>Read article</TextLink>
    </div></section>
    <section className="container section"><div className="insight-grid">{insights.slice(1).map(a => <InsightCard key={a.slug} article={a} />)}</div></section>
    <CallToAction />
  </>;
}
