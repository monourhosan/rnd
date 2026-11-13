import { contactReady, contactSchema, composeEnquiry } from "@/lib/contact";

export const runtime = "nodejs";
const attempts = new Map<string, { count: number; reset: number }>();
const MAX_BYTES = 24_000;
const reply = (message: string, status: number) => Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Same-origin browser requests only. No submitted site URL is trusted.
  const expectedOrigin = new URL(request.url);
  // Next can normalize the internal request URL to localhost. Host retains the
  // authority the browser addressed; do not trust forwarded-host input here.
  const host = request.headers.get("host");
  if (host) expectedOrigin.host = host;
  if (!origin || origin !== expectedOrigin.origin) return reply("This request could not be accepted.", 403);
  if (!contactReady()) return reply("Online enquiries are not available yet. No message has been sent.", 503);
  if (!request.headers.get("content-type")?.includes("application/json")) return reply("Please send a valid enquiry.", 415);
  if (Number(request.headers.get("content-length")) > MAX_BYTES) return reply("Your message is too long.", 413);
  let input: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply("Please send a valid enquiry.", 400);
    let bytes = 0;
    const chunks: Uint8Array[] = [];
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BYTES) { await reader.cancel(); return reply("Your message is too long.", 413); }
      chunks.push(value);
    }
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return reply("Please send a valid enquiry.", 400); }
  const result = contactSchema.safeParse(input);
  if (!result.success) return Response.json({ message: "Please check the highlighted fields.", errors: result.error.flatten().fieldErrors }, { status: 400, headers: { "Cache-Control": "no-store" } });

  // Best-effort instance-local control. Configure managed edge protection for production.
  const now = Date.now();
  for (const [key, value] of attempts) if (value.reset < now) attempts.delete(key);
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const current = attempts.get(key) || { count: 0, reset: now + 600_000 };
  if (current.count >= 5 || attempts.size > 10_000) return reply("Please wait before trying again.", 429);
  current.count += 1;
  attempts.set(key, current);
  try {
    const provider = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL], reply_to: result.data.email, subject: "New Mirror Metrics website enquiry", text: composeEnquiry(result.data) }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!provider.ok) return reply("Your enquiry could not be sent. Please try again later.", 502);
    const receipt = await provider.json();
    if (!receipt.id) return reply("Delivery could not be confirmed. Please try again later.", 502);
    return reply("Your enquiry has been accepted for delivery. Thank you for getting in touch.", 200);
  } catch { return reply("Your enquiry could not be sent. Please try again later.", 502); }
}
