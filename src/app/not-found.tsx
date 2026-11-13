import Link from "next/link";
import Image from "next/image";
export default function NotFound() { return <section className="not-found container"><Image src="/brand/eye-mark.webp" alt="" width={130} height={77} /><p className="eyebrow">404 / A different perspective</p><h1>This page is<br /><em>out of the picture.</em></h1><p>The link may have changed. There’s more to explore from here.</p><Link href="/" className="button">Back to home <span aria-hidden="true">↗</span></Link></section>; }
