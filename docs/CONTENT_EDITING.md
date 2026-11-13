# Editing the website

## Common changes

| Change | File |
| --- | --- |
| Legal name, display name, verified email/phone/address, navigation | `src/config/site.ts` |
| Six service descriptions, methods, outputs, anchors | `src/content/services.ts` |
| Sector descriptions and questions | `src/content/sectors.ts` |
| Hypothetical research scenarios | `src/content/applications.ts` |
| Article titles, abstracts, sections and categories | `src/content/insights.ts` |
| Photo paths and accurate alt text | `src/content/images.ts` |
| Colors, spacing and responsive styles | `src/app/globals.css` |
| Homepage layout and headline | `src/app/page.tsx` |
| Original logo | `public/brand/logo-original.jpg` |

Keep quotation marks and commas around text entries intact. An editor with TypeScript support will flag syntax mistakes. To include a literal double quote inside a double-quoted string, escape it as `\"`, or use different surrounding quotes. Keep service IDs stable: they are linked from the homepage and enquiry form. Article slugs become URLs; changing a published slug needs a redirect in `next.config.ts`.

## New articles
Copy one object in `insights.ts`, give it a unique slug, category, title, abstract, existing photo reference and sections. Reading times and listing cards are generated automatically. Do not add invented publication dates, empirical results or named authors. The house byline is deliberately labeled. An empirical report should be a separately verified content type, not slipped into an editorial template.

## Photography and logo
Place new optimized WebP photographs in `public/images/`, update the matching path and alt text, then add the original source and license to `docs/IMAGE_CREDITS.md`. Do not use filenames as a substitute for permission evidence. Describe what is visible; do not infer an occupation or relationship with the company.

The supplied logo is already integrated. `node scripts/prepare-assets.mjs` reproduces its cropped derivatives and converts any new JPGs in `public/images/` to WebP. The script removes only the input JPGs it has successfully converted; preserve source masters outside that folder. Logo crop coordinates are specific to the existing 2048×2048 artwork. A replacement with different dimensions needs new coordinates.

## Contact configuration
Copy `.env.example` to `.env.local`. Set a verified Resend sender as `CONTACT_FROM_EMAIL`, the real recipient as `CONTACT_TO_EMAIL`, and a server-only `RESEND_API_KEY`. The sender field must be a bare email address, not a display-name string. Optionally provide the verified `NEXT_PUBLIC_CONTACT_EMAIL` for a visible mailto fallback. Restart development after changing environment values; redeploy production after changing Vercel variables.

When the server values are absent or invalid, the form remains disabled and the API returns an unavailable response. Never remove that behavior to make the form appear to work. No real mail was sent during development verification. Use a provider test environment before a live end-to-end delivery check. Confirm privacy practices before enabling the form.

## Before sharing a change
Run `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`. Review the changed pages on a phone and desktop. The setup uses Node 24; install an official Node 24 LTS distribution for everyday use. A workspace-local copy was used during initial construction because Node was absent from PATH.
