import Link from "next/link";
import { PageIntro } from "@/components/editorial";
import { contactReady } from "@/lib/contact";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";
export const dynamic = "force-dynamic";
export const metadata = pageMetadata("Privacy", "How Mirror Metrics handles website enquiries and technical data.", "/privacy");
export default function Privacy() {
  const ready = contactReady();
  return <><PageIntro title="Privacy" text="How this website handles your information." />
    <div className="container privacy-content">
      <section><h2>About this website</h2><p>This website presents Mirror Metrics Research and Consultancy Ltd, Bangladesh. This statement covers website use; research studies have separate consent arrangements.</p></section>
      <section><h2>Enquiries</h2><p>{ready ? "We request your name, email, optional organization, area of interest, and message to respond to your enquiry. Enquiries are delivered through Resend to our configured email recipient." : "The enquiry form is currently disabled and does not accept or send messages. When enabled, it will request your name, email, optional organization, area of interest, and message to respond to your enquiry."}</p><p>Please do not send sensitive personal information or identifiable research-participant data.</p></section>
      <section><h2>Data handling</h2><p>There is no enquiry database. Messages are not intentionally written to application logs. When enquiries are enabled, messages may remain with email providers and the recipient; retention practices must be confirmed before enquiries open.</p></section>
      <section><h2>Technical data & cookies</h2><p>Hosting providers may process IP addresses, page requests, and operational logs. When enabled, spam protection temporarily tracks request IP addresses for up to ten minutes on an active application instance.</p><p>This site installs no analytics, advertising trackers, or tracking cookies. Fonts and photographs are served locally.</p></section>
      <section><h2>Your choices</h2><p>You can browse without sending an enquiry.</p>{site.email ? <p>For privacy or deletion questions, email <a href={"mailto:" + site.email}>{site.email}</a>.</p> : <p>A verified privacy contact is not yet available. Check the <Link href="/contact">contact page</Link> for updates.</p>}</section>
      <section><h2>Photography</h2><p>Photographs provide context. People pictured are not represented as employees, clients, study participants, or endorsers.</p></section>
    </div>
  </>;
}
