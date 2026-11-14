import Link from "next/link";
import Image from "next/image";
export default function NotFound() { return <section className="not-found container"><Image src="/brand/eye-mark.webp" alt="" width={130} height={77} /><p className="eyebrow">404</p><h1>Page not found.</h1><p>The page may have moved.</p><Link href="/" className="button">Back to home <span aria-hidden="true">↗</span></Link></section>; }
