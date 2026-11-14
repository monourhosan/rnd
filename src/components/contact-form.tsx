"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { services } from "@/content/services";

type FieldErrors = Record<string, string[] | undefined>;
export function ContactForm({ ready, defaultInterest }: { ready: boolean; defaultInterest: string }) {
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const status = useRef<HTMLDivElement>(null);
  function error(name: string) { return errors[name] ? <span className="field-error" id={`${name}-error`}>{errors[name]?.[0]}</span> : null; }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || pending) return;
    setPending(true); setMessage(""); setErrors({});
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.get("name"), email: form.get("email"), organization: form.get("organization"), interest: form.get("interest"), message: form.get("message"), consent: form.get("consent") === "on", website: form.get("website") }), signal: AbortSignal.timeout(15_000) });
      const result = await response.json();
      setMessage(result.message || "Your enquiry could not be sent.");
      if (response.ok) setSuccess(true);
      else if (result.errors) {
        setErrors(result.errors);
        const field = Object.keys(result.errors).find(key => result.errors[key]?.length);
        if (field) document.getElementById(field)?.focus();
      }
    } catch { setMessage("Your enquiry could not be confirmed. Please check your connection and try again later."); }
    finally { setPending(false); }
  }
  return <div className="contact-form-wrap">{!ready && <div className="availability-note"><span className="eyebrow">Enquiries opening soon</span><p>The form is currently unavailable. Please check back shortly.</p></div>}
    <div className={`form-status${success ? " success" : ""}`} ref={status} role="status" aria-live="polite">{message}</div>
    {!success && <form onSubmit={submit} aria-label="Research enquiry" aria-describedby={!ready ? "contact-unavailable" : undefined}>
      {!ready && <p id="contact-unavailable" className="visually-hidden">Form unavailable while contact delivery is being configured.</p>}
      <fieldset disabled={!ready || pending}><legend className="visually-hidden">Your enquiry details</legend><div className="form-grid"><div><label htmlFor="name">Your name <span>*</span></label><input id="name" name="name" autoComplete="name" required minLength={2} maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />{error("name")}</div><div><label htmlFor="email">Work email <span>*</span></label><input id="email" name="email" type="email" autoComplete="email" required maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} />{error("email")}</div><div><label htmlFor="organization">Organization <small>(optional)</small></label><input id="organization" name="organization" autoComplete="organization" maxLength={160} />{error("organization")}</div><div><label htmlFor="interest">Area of interest <span>*</span></label><select id="interest" name="interest" required defaultValue={defaultInterest} aria-invalid={!!errors.interest} aria-describedby={errors.interest ? "interest-error" : undefined}><option value="" disabled>Select an area</option>{services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}<option value="partnership">Partnership</option><option value="general">General enquiry</option></select>{error("interest")}</div></div><div className="message-field"><label htmlFor="message">Your message <span>*</span></label><textarea id="message" name="message" rows={6} required minLength={20} maxLength={5000} aria-invalid={!!errors.message} aria-describedby={`message-help${errors.message ? " message-error" : ""}`} /><small id="message-help">20–5,000 characters. No sensitive personal information, please.</small>{error("message")}</div><div className="honeypot" aria-hidden="true"><label htmlFor="website">Leave this field empty</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div><label className="consent-label" htmlFor="consent"><input id="consent" name="consent" type="checkbox" required aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-error" : undefined} /><span>My details will be used to respond to this enquiry. See the <Link href="/privacy">privacy statement</Link>.</span></label>{error("consent")}<button type="submit" className="button" disabled={!ready || pending}>{pending ? "Sending enquiry…" : "Send enquiry"}<span aria-hidden="true">↗</span></button></fieldset></form>}
  </div>;
}
