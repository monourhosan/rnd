"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navigation } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  function closeMenu() {
    dialog.current?.close();
    document.body.style.overflow = "";
    trigger.current?.setAttribute("aria-expanded", "false");
    trigger.current?.focus();
  }
  useEffect(() => {
    dialog.current?.close();
    document.body.style.overflow = "";
    trigger.current?.setAttribute("aria-expanded", "false");
    return () => { document.body.style.overflow = ""; };
  }, [pathname]);
  return <header className="site-header">
    <div className="header-inner">
      <Link href="/" className="brand" aria-label="Mirror Metrics home">
        <Image src="/brand/eye-mark.webp" width={72} height={43} alt="" priority />
        <span><strong>Mirror Metrics<span className="brand-dot">.</span></strong><small>RESEARCH & CONSULTANCY</small></span>
      </Link>
      <nav aria-label="Main navigation" className="desktop-nav">{navigation.map(n => <Link key={n.href} href={n.href} aria-current={pathname === n.href ? "page" : undefined}>{n.label}</Link>)}</nav>
      <button ref={trigger} className="menu-button" aria-haspopup="dialog" aria-controls="mobile-menu" aria-expanded="false" onClick={() => { dialog.current?.showModal(); document.body.style.overflow = "hidden"; trigger.current?.setAttribute("aria-expanded", "true"); }}>Menu <span aria-hidden="true">☰</span></button>
    </div>
    <dialog id="mobile-menu" ref={dialog} className="mobile-dialog" aria-label="Navigation menu" onClose={closeMenu} onCancel={event => { event.preventDefault(); closeMenu(); }} onKeyDown={event => {
      if (event.key !== "Tab") return;
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <div className="menu-top"><span className="eyebrow">Explore Mirror Metrics</span><button onClick={closeMenu} aria-label="Close navigation menu">Close ×</button></div>
      <nav aria-label="Mobile navigation">{[...navigation, { label: "Our approach", href: "/approach" }, { label: "Sectors", href: "/sectors" }].map((n, i) => <Link key={n.href} href={n.href} onClick={closeMenu} aria-current={pathname === n.href ? "page" : undefined}><span className="menu-number">0{i + 1}</span>{n.label}<span aria-hidden="true">↗</span></Link>)}</nav>
      <p>People. Context. Clearer decisions.</p>
    </dialog>
  </header>;
}
