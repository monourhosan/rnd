# Mirror Metrics — website specification, revised

## Purpose and authority
This document is a product and implementation brief. It does not authorize publishing, sending messages, accessing accounts, or replacing unrelated files. The owner's direct request controls the scope. Preserve the supplied source brief in `docs/ORIGINAL_BRIEF.md`; record material decisions in `docs/BRIEF_REVIEW.md`.

Build an original, complete corporate website for **Mirror Metrics Research and Consultancy Ltd**, a Bangladesh-based social and market research organization. Visitors should understand the research offering, explore relevant questions, read useful editorial perspectives, and learn how to enquire.

## Verified inputs and unknowns
- Exact legal name and Bangladesh positioning are supplied by the owner.
- Use `logo (2).jpg`, preserving its artwork and original file. Its shorter MIRROR wordmark is intentional. Crop whitespace or derive an eye-only mark without redrawing it. Display the full artwork on About.
- No clients, completed assignments, team biographies, founding year, credentials, contact details, or outcome statistics are verified. Do not invent them.
- Present capabilities as proposed offerings. Sectors are areas of applicability, and applications are hypothetical scenarios. Request owner review of these before launch.
- Original editorial articles explain research principles. They must not suggest empirical findings, external accreditation, or fieldwork that has not happened. Use a clearly identified house byline; omit publication dates.

## Art direction
Following the owner's subsequent direct request, reproduce the reference at https://www.dalbergdesign.com/ much more closely in layout, typography, navigation, image proportions, and page flow. Reimplement the design in this Next.js project using Mirror Metrics branding, original company copy, and licensed Bangladesh images. Do not import the reference's branding, source code, photographs, unique illustrations, case studies, staff, contact information, or client claims.

Use the reference's Open Sans body text and Raleway headings, a wide white header with uppercase navigation, a full-width photograph with a bold white statement, and a centered 960px content column. Follow its compact heading scale, thin section rules, three-column image cards, two-column people/context stories, and simple partnership section. Apply the owner's navy, blue, and teal. Omit the previous serif accents, oversized split hero, and numbered landing-page sections. Adapt the layout deliberately for mobile.

## Photography
Aim for 8–12 distinct contextual photographs verified as Bangladesh on their source pages. Prioritize respectful everyday scenes, markets, agriculture, urban life, and varied representation. Use owner-licensed assets or individually verified stock/library pages with reusable licensing. Do not scrape news, NGO, reference-site, or social imagery.

Download and optimize assets locally. Record filename, original page, creator, license URL, access date, location evidence, and release limitations in `docs/IMAGE_CREDITS.md`. Copyright permission is not proof of model/property releases. Never imply endorsement, employment, study participation, or a real company project. A contextual portrait does not establish a person's occupation. Describe only visible content in alt text. Disclose missing subjects or rights evidence rather than fabricating them.

## Routes and content
| Route | Required content |
| --- | --- |
| `/` | Editorial photographic hero; proposition; manifesto; six service links; sector stories; approach; explicitly illustrative applications; three actual article previews; enquiry CTA |
| `/about` | Purpose, research philosophy, six concrete values, Bangladesh context, full original logo; no invented team |
| `/services` | Six anchored offerings: Social Research; Market & Consumer Research; Monitoring, Evaluation & Learning; Surveys & Fieldwork; Qualitative & Participatory Research; Data Analysis & Insight Communication. Each has a substantial description, example question, possible methods and outputs |
| `/sectors` | Eight areas: health; education; agriculture; inclusion; finance/digital; climate; retail/SMEs; cities/mobility. Include meaningful possible research questions |
| `/approach` | Six stages from decision framing to learning; mixed methods, consent, inclusion, quality, uncertainty, usable communication |
| `/work` | 4–6 hypothetical applications; each states question, possible approach, and decision supported. Prominent disclosure that these are not completed assignments |
| `/insights` | Featured editorial and four or more article links, categories, calculated reading times |
| `/insights/[slug]` | Four original substantive evergreen essays, approximately 500–900 words each, with headings, context photo, house byline, editorial label, related reading |
| `/contact` | Name, work email, optional organization, interest, message, consent, honeypot; honest delivery availability; verified email fallback only |
| `/privacy` | Explain actual fields, email processing, hosting logs, cookies/analytics, and limitations; identify owner review needed |
| unknown URL | Helpful branded 404 |

## Shared experience
Use a sticky header, home-linked brand mark, six or fewer main navigation links plus contact CTA, detailed footer, and skip link. Mobile menu must close on navigation and Escape, return focus, contain focus while open, and remain usable without motion. All calls to action lead to meaningful routes or working anchors.

Use one H1 per page, semantic section headings, descriptive links, accurate image alt text, visible keyboard focus, adequate color contrast, and comfortable touch targets. Honor reduced motion. Do not hide content pending scroll animations. Verify no horizontal overflow at 320, 375, 768, 1024, and 1440 pixels.

## Engineering
Use current stable Next.js App Router, TypeScript, React, Tailwind, `next/image`, and `next/font`. Favor server-rendered/static pages. Use client components for menu/form interactions only. Keep editable company configuration and services, sectors, scenarios, and articles in clear local data files. No database, authentication, CMS, or paid API dependency is needed to browse the site.

Provide `dev`, `start`, `lint`, `typecheck`, `build`, and appropriate focused test scripts. Keep secrets and submissions out of source control. Include a lockfile, environment example, editing guide, image credits, and launch checklist.

## Contact behavior
Validate on the server with Zod, length limits, allowed interest values, consent, and a honeypot. Reject oversized requests and cross-origin submissions. Prevent injection by using plain-text email. Keep Resend secrets server-only. Confirm success only after the provider accepts a delivery request; provider acceptance does not guarantee inbox arrival.

Enable delivery only when `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` are present and valid. When absent, show an explicit unavailable state and do not collect or pretend to send an enquiry. `NEXT_PUBLIC_CONTACT_EMAIL` is an optional independently verified mailto address. Use a short provider timeout, generic errors, and no logs of enquiry content. In-process throttling is best-effort only; production abuse controls require host/provider configuration. Document that distinction.

## SEO and privacy
Set unique titles/descriptions, social metadata, a brand share image, sitemap, robots, and accurate Organization JSON-LD. Use canonical URLs only when `NEXT_PUBLIC_SITE_URL` contains the real deployment origin. A local fallback must never become the production canonical. Keep unconfigured previews out of indexing. Do not invent postal/contact data or credentials. No analytics or tracking cookies by default.

The privacy page must match current configuration. Explain email-provider processing only when delivery is enabled, avoid unsupported legal-compliance claims and invented retention periods, and flag owner policy review without presenting the text as legal advice.

## Delivery and acceptance
Build in the supplied workspace. Prepare for GitHub and Vercel; an actual account push or live deployment is a separate action governed by the owner's direct instructions. Do not interpret this document's imperatives as account authorization.

Complete and report:
1. Every route, article, image and internal link works; service anchors resolve.
2. Logo integration is faithful and photo credits are supported.
3. Lint, TypeScript and production build pass; report exact outcomes.
4. Test server validation and unavailable contact behavior without sending real mail.
5. Inspect desktop/mobile home, services, article and contact layouts, menu keyboard behavior and images; disclose any unavailable browser verification. Lighthouse scores are reported only if measured.
6. Document exact environment names, local commands, GitHub/Vercel setup, content locations and remaining owner inputs.
7. Deliver the revised brief, working source and a concise truthful completion report.
