# CODEX MASTER BUILD PROMPT
## Mirror Metrics Research and Consultancy Ltd — Premium Corporate Research Website

> **How to use this file:** Put this Markdown file in the root of your GitHub project/repository, add the supplied logo image to the repository as explained below, then instruct Codex: **“Read `Mirror_Metrics_Codex_Website_Prompt.md` completely and implement the website end-to-end. Do not stop at a plan or mockup. Create the working project, run checks, fix errors, and prepare it for GitHub and Vercel.”**
>
> **Execution rule:** Treat this file as the project specification. Make reasonable choices without asking repetitive questions. Where genuine company details are missing, use an easy-to-edit configuration or clearly labeled editorial examples; NEVER invent company achievements, clients, staff, testimonials, partnerships, addresses, phone numbers, or survey results.

---

# 1. YOUR ROLE AND PRIMARY OBJECTIVE

You are a senior creative director, brand designer, UX/UI designer, accessibility specialist, content designer, and full-stack Next.js engineer. **Actually build and deliver a production-quality, responsive, deployable website**, not just a Figma concept, wireframe, plan, or partial scaffold.

**Company's exact legal name:** Mirror Metrics Research and Consultancy Ltd

**Organization type:** Bangladesh-based social and market research organization.

**Main purpose:** Position Mirror Metrics as a thoughtful, credible, modern research and consultancy partner for NGOs, development partners, public-sector institutions, enterprises, brands, and organizations seeking research-led decisions in Bangladesh. Speak about these audiences as potential clients/partners, NOT as existing clients unless verified.

**Visual benchmark:** https://www.dalbergdesign.com/

The owner likes this reference's design-oriented, editorial approach. Analyze its overall visual language if browsing is possible: extensive photography, bold editorial headings, clear white space, meaningful narrative sections, service explanations, article/project-style cards, and simple navigation. Translate that general quality and information architecture into an **original Mirror Metrics website**. It should feel comparable in polish, ambition, and storytelling but must NOT copy Dalberg's source code, unique layout pixel-for-pixel, logo, proprietary imagery, case studies, slogans, text, illustrations, or other protected branding. No Dalberg references should remain in the completed site's user-facing content.

**Non-negotiable quality bar:** A real, attractive website suitable to publish publicly and show to institutional decision-makers. It must not look like a generic template, AI-generated landing page, or a collection of empty placeholder boxes.

---

# 2. BRAND IDENTITY — USE THE OWNER'S REAL LOGO

The owner provided a square JPEG logo file originally named **`logo (2).jpg`**. It depicts a distinctive pair of circular blue and teal eye forms over the dark-navy wordmark **“MIRROR”** and the line **“RESEARCH & CONSULTANCY.”** The website's legal-name text must be **“Mirror Metrics Research and Consultancy Ltd”** even though the artwork itself currently uses the shorter “MIRROR” wordmark. This discrepancy is intentional to preserve the supplied artwork; do not secretly rewrite, stretch, distort, or fabricate a replacement logo.

**Logo handling instructions:**

1. Look for the supplied file in the repository root, `assets/logo (2).jpg`, `assets/logo.jpg`, `public/logo.jpg`, `public/logo-source.jpg`, or another obvious uploaded-logo path. If found, preserve the original in `public/brand/logo-original.jpg` (or appropriate equivalent).
2. Use the owner's actual logo in the navigation and/or prominent About/footer identity area. Its source image is a **2048 × 2048 square JPEG** with a white backdrop and generous white margins. Create additional optimized, **non-distorted** versions as needed (e.g., a cropped white-background horizontal-ish variant for desktop header, square brand artwork for About page, and icon-only favicon/app icons). You may crop empty white margins and resize the original, but preserve its eye marks, colors, and lettering faithfully.
3. In the header, ensure the logo is LEGIBLE rather than tiny. If the original full artwork becomes unreadable at nav size, use a carefully cropped eye-symbol variant alongside HTML text “Mirror Metrics” and optionally a smaller “Research & Consultancy” line. Keep the complete original logo visible elsewhere, such as the About section/footer. Do not replace the logo entirely with text.
4. Create favicon and Apple touch icon from the eye symbol if feasible; otherwise use a clean fallback initial mark until the image is provided.
5. If the logo file is not present in Codex's working directory, implement a tasteful fallback header based on text and an abstract CSS eye motif, add a concise note to the README about exactly where to put `logo (2).jpg`, and make the components automatically switch to the owner's logo when added. **Never claim the actual supplied image has been integrated if it is absent.**

### Suggested starting palette (sample the real logo and fine-tune)

| Token | Approx. color | Use |
|---|---|---|
| `--navy` | `#102B43` | Primary text, dark sections, footer |
| `--royal-blue` | `#315D94` | Brand blue, graphic accents |
| `--teal` | `#22B1B5` | Secondary brand, subtle interactive accents |
| `--ink` | `#152638` | Body/headline text |
| `--off-white` | `#F7F9F8` | Site background |
| `--warm-white` | `#FFFFFF` | Surface background |
| `--mist` | `#E8F1F2` | Light callouts/section blocks |
| `--muted` | `#586877` | Secondary text |

These are starting estimates; derive precise colors from the supplied logo when possible. Use accessible contrast, especially for text on teal. Avoid treating every section as teal/blue; tasteful whitespace, photo color, and strong typography should dominate.

### Visual style

- **Editorial, human, sophisticated, optimistic, evidence-led.** Think a leading international research consultancy with distinct Bangladeshi context.
- Generous whitespace; structured 12-column grid; expressive oversize headings; strong alignment and disciplined spacing.
- Mix immersive full-bleed image moments, large asymmetrical photo/text sections, quiet off-white content zones, image-led feature cards, and dark-navy closing CTAs.
- Fonts: choose an expressive, polished Latin sans combination (e.g., **Manrope** or **DM Sans** for headings and **Inter** for body), available via `next/font`. If Bengali text is later included, support a proper Bengali font such as Noto Sans Bengali and correct line breaking.
- Use mature shapes and restrained borders instead of excessive gradients, glassmorphism, blobs, shadows, fake dashboards, or flashy neon effects.
- Buttons: clean, solid primary button, restrained outline/text secondary buttons, clear hover and focus states.
- Motion: short and subtle, e.g., header/menu transitions, staggered editorial reveals, card hover photo zoom; honor `prefers-reduced-motion`.
- No horizontal scrolling on mobiles. Keep layouts intentional at 320 px, 375 px, 768 px, 1024 px, and 1440 px widths.

---

# 3. BANGLADESH PHOTOGRAPHY — ESSENTIAL

The site should prominently feature **real, credible-looking, context-accurate photographs of Bangladeshi people and places**, and preferably **authentic photographs actually taken in Bangladesh**, not generic photos of unrelated countries mislabeled as Bangladesh.

### Required photographic subjects

Choose approximately **8–12 distinct, high-quality photographs**, with appropriate variety and careful composition:

1. **Homepage hero:** authentic Bangladeshi people in an everyday community, marketplace, research discussion, city or rural setting; strong image with a clear area for overlay or adjacent typography.
2. **Social research:** a respectful scene of adults in a Bangladeshi community or informal group discussion; do not portray a staged image as one of this company's actual studies.
3. **Market research:** Bangladesh retail, marketplace, small businesses, consumers, local entrepreneurs, or vendors.
4. **Field research:** credible contextual photo involving community interactions, community environments, or documentation (without falsely claiming the people depicted are company employees).
5. **Women and livelihoods:** women engaged in entrepreneurship, education, employment, or community activity, represented with dignity and agency.
6. **Agriculture/rural livelihoods:** farmers, cultivated land, riverine livelihoods, or rural markets in Bangladesh.
7. **Urban economy/youth:** contemporary Dhaka or another Bangladeshi city, workplaces, youth learning, streets, or digital services.
8. **Health/education/community life:** contextual, respectful image that matches one research sector.
9. Additional vertical/wide editorial images for service pages, insight cards, and contact CTA.

### Photo sourcing rules

- Prefer **the owner's actual licensed photos**, or properly licensed and downloaded local assets from **Unsplash**, **Pexels**, or **Wikimedia Commons** with clear reuse rights. Search specifically for Bangladesh/Dhaka/Bangladeshi subjects and check the photograph's actual description/location where available.
- Potential search entry points: https://unsplash.com/s/photos/bangladesh-people , https://unsplash.com/s/photos/dhaka , https://www.pexels.com/search/bangladesh/ . These are **search pages, not approved image URLs**. Select actual image assets and confirm each image's license individually.
- Save chosen images in `public/images/` as optimized `webp`/`avif` where possible. Do not rely on unstable hotlinks or external image proxy URLs for the final site. Use descriptive filenames and `<Image>` from Next.js with correct `sizes` and priority for the hero.
- Create `docs/IMAGE_CREDITS.md` listing file name, source page URL, creator, applicable license, access date, and any required attribution or permission concerns. Verify rights for identifiable people: a stock photo copyright license is not always a release for endorsement/advertising. **Do not imply a person is an employee, participant in a Mirror Metrics study, or endorser unless verified and permitted.**
- No web-scraping images from Dalberg, news publications, NGO websites, or social networks without explicit licensing.
- Avoid watermarks, strange AI hands/faces, stock-boardroom imagery, stereotypes, staged pity/poverty aesthetics, and over-filtered photos.
- Alt text should describe observable content accurately and concisely, not infer identity, occupation, exact location, or consent without evidence.
- Cropping must preserve faces and important context; use appropriate focal points and test mobile crops.
- If network restrictions prevent downloading verifiably licensed photography, document the exact missing images in `docs/IMAGE_CREDITS.md`, keep the code ready for drop-in local photos, and **do not fabricate license data**. A few verified images are better than twelve unauthorized ones.

**Visual storytelling principle:** Bangladesh should be visibly at the heart of the site, but every community should be depicted with respect and representational diversity. Avoid suggesting stock photos document real client projects.

---

# 4. SITE STRUCTURE AND ROUTES

Implement the following polished pages with **Next.js App Router**. All pages must have meaningful finished content, not an empty title and generic card grid.

| Route | Page / nav label | Purpose |
|---|---|---|
| `/` | Home | Powerful first impression, proposition, services, sector overview, featured insights, CTA |
| `/about` | About Us | Who we are, what we believe, values, research philosophy, Bangladesh context |
| `/services` | What We Do | Clear service categories, methods and possible deliverables |
| `/sectors` | Sectors | Research sectors and the kinds of questions we investigate |
| `/approach` | Our Approach | Ethical, mixed-methods research process and methodology |
| `/work` | Research Applications | Editorial examples **clearly identified as illustrative**, not fake completed projects |
| `/insights` | Insights | Original published-style articles; no fictitious survey findings |
| `/insights/[slug]` | Insight detail | Beautiful full article template with related reading and metadata |
| `/contact` | Contact / Partner With Us | Contact form or truthfully configured email mechanism, potential engagements CTA |
| `/privacy` | Privacy | Accurate plain-language explanation of actual website data handling |
| `not-found` | 404 | On-brand helpful missing page and return-home link |

Main desktop navigation can be: **About / What We Do / Sectors / Our Approach / Insights / Contact**, with the wordmark returning Home. Put “Research Applications” in Home page sections and the footer or in a tasteful dropdown if navigation is crowded. Avoid more than 7 primary header links. On mobile use an accessible, smooth, keyboard-friendly menu.

Provide a consistent header and footer on every page, with a sticky or sticky-on-scroll white header that does not cover anchor targets. Header CTA may say **“Start a Conversation.”** Footer should include actual legal name, “Bangladesh-based social and market research,” navigation, and only verified/actually configured contact details and social links. Do not invent a street address in Dhaka or a social media profile.

---

# 5. CONTENT AND PAGE-BY-PAGE DESIGN BRIEF

Write strong, original, accurate, specific English copy. The language should be confident without self-congratulation, grounded in research, and understandable to both local and international audiences. No filler like “Lorem ipsum,” fake accomplishments, invented numbers, or unverified claims that Mirror Metrics has conducted studies for named organizations. Avoid lifting Dalberg's wording.

## 5.1 HOME PAGE — HIGHEST DESIGN PRIORITY

Aim for a visually memorable first screen and a compelling editorial journey down the page. Suggested order:

### A. Hero (nearly full-screen desktop)
- Impactful authentic Bangladesh photograph, either full-bleed with a well-controlled navy overlay or in a 55/45 editorial split.
- Small eyebrow: **“BANGLADESH-BASED SOCIAL & MARKET RESEARCH”**
- Primary H1 (preferred copy):
  **“Research that reflects reality. Insights that move decisions.”**
- Short text: **“Mirror Metrics Research and Consultancy Ltd helps organizations better understand people, communities, and markets through thoughtful research and clear, actionable evidence.”**
- Two CTAs: **“Explore Our Services”** → `/services` and **“Start a Conversation”** → `/contact`.
- Small tasteful scroll indicator on desktop if appropriate.
- Ensure image text is readable. Do not overuse animated typing or a huge generic gradient.

### B. An introductory editorial manifesto
- Split layout with small section number/eyebrow, compelling heading, and two paragraphs.
- Sample heading: **“Good decisions begin with understanding.”**
- Content theme: real-world complexity, listening carefully, combining social context and market evidence, making findings genuinely usable. Mention Bangladesh explicitly.
- Strong secondary photo of people in a real Bangladesh setting.

### C. What We Do (service preview)
- 6 beautifully designed cards/rows with modest icons, numbers, or typography; every card links to its exact detailed Services anchor or page.
- Suggested categories: **Social Research**, **Market & Consumer Research**, **Monitoring, Evaluation & Learning**, **Surveys & Fieldwork**, **Qualitative & Participatory Research**, **Data Analysis & Insight Communication**.
- Use a tactile editorial grid, not six identical colored boxes.

### D. People, Markets, and Systems (large photo-led sector story)
- 3–4 large imagery cards with thoughtful headings such as **Communities & Social Change**, **Consumers & Enterprises**, **Livelihoods & Inclusion**, **Public Services & Development**.
- Cards describe focus areas without implying prior projects.
- Gentle hover interactions and clear accessible links to `/sectors`.

### E. Our Approach preview
- Title: **“Rigorous where it matters. Human at every step.”**
- Short six-step or four-stage diagram/visual: Listen → Design → Gather → Interpret → Act (or a similarly clear research cycle).
- Make it legible and meaningful on phones.

### F. Research Applications (honest alternative to fake case studies)
- Editorial photo grid linking to `/work`.
- Label prominently: **“Illustrative Research Applications”** with text **“Examples of research questions and engagement types, not claims about completed client assignments.”**
- Show hypothetical, clearly marked topics (e.g., consumer trust in digital services, community priorities for social programs, small enterprise market opportunities).

### G. Selected perspectives
- Pull 3 article cards from the actual articles data source. Display proper editorial category and reading time derived from content, never fabricated publication dates. If a date is unknown, omit the date.

### H. Closing CTA
- Dark-navy or high-quality full-width photo panel; line: **“Bring your questions. Let’s find the evidence that matters.”**
- Action: **“Partner With Us”** → `/contact`.
- Finish with a detailed footer.

## 5.2 ABOUT US — `/about`

- Photo-led page intro with eyebrow **“WHO WE ARE”** and H1 **“A closer look. A clearer path forward.”**
- Explain explicitly: Mirror Metrics Research and Consultancy Ltd is a social and market research organization based in Bangladesh, with a focus on understanding people, markets, programs, and the environments in which decisions are made.
- Sections: **Our Purpose**, **How We Think**, **Our Values**, **Why Context Matters**, **Working Across Bangladesh** (as perspective/capability, not an unverified claim about geographic coverage).
- Suggested values: **Integrity**, **Curiosity**, **Respect**, **Methodological Rigor**, **Clarity**, **Collaboration**. Give each a concrete one-to-two-sentence explanation.
- Use one distinctive section featuring a full-size, high-quality display of the owner's complete original logo and the full legal name nearby.
- **Do not create fictional team members, job titles, founder stories, founding year, certifications, offices, affiliations, awards, or a fake team photo.** If no real team data exists, provide a section “Meet Our Team” only if it can be added from config, otherwise omit it altogether.
- Secondary CTA → `/approach` and `/contact`.

## 5.3 WHAT WE DO — `/services`

Present capabilities as thoughtful research offerings rather than exaggerated promises. Each major service should contain a 70–120 word description, a natural example of a research question, example methodologies, and potential outputs.

**Service categories:**

1. **Social Research** — community needs, lived experience, social behaviors, perceptions, social inclusion, and program contexts.
2. **Market & Consumer Research** — consumer needs, usage and attitudes, segmentation, customer journeys, brand/category understanding, demand exploration.
3. **Monitoring, Evaluation & Learning (MEL)** — research questions and learning frameworks, baselines/endlines where relevant, mixed-method evaluations, reflection and learning products. Do not claim certification or historic MEL assignments.
4. **Quantitative Surveys & Fieldwork** — questionnaire design, sampling considerations, field team processes, data-quality controls, survey analysis.
5. **Qualitative & Participatory Research** — in-depth interviews, focus groups, observation, participatory and human-centered techniques, ethical engagement.
6. **Data Analysis, Visualization & Reporting** — cleaning and analysis, triangulation, clear visualization, decision-ready reports, presentations, stakeholder briefings.
7. Optional **Research Advisory & Study Design** — turning broad questions into sound research frameworks and feasible plans.

Provide a prominent but honest **“Methods we can apply”** strip: Surveys, In-depth Interviews, Focus Group Discussions, Key Informant Interviews, Observation, Secondary Research, Mixed-Methods Analysis, Research Synthesis. Do not promise methods the organization has not confirmed as contractual services; the content should be editable from a central data file.

Create page anchors like `#social-research` and `#market-research`, suitable for linking from the Home page.

## 5.4 SECTORS — `/sectors`

Use an elegant visual grid with Bangladesh-relevant research themes. Suggested sector labels:

- Public Health & Wellbeing
- Education & Skills
- Agriculture & Rural Livelihoods
- Gender & Social Inclusion
- Financial Inclusion & Digital Services
- Climate Resilience & Environment
- Consumer Goods, Retail & SMEs
- Cities, Mobility & Urban Livelihoods

For each, include a concise, insightful description plus examples of questions research might answer. Frame these as **“Areas of research interest and applicability”** unless verified company project history is supplied. Include appropriate local contextual photography. Do not present these categories as a list of accomplished projects or clients.

## 5.5 OUR APPROACH — `/approach`

This should be the most persuasive evidence of the firm's thoughtful methodology. Suggested H1: **“Listen closely. Measure carefully. Make sense together.”**

Create a visually compelling, functional 6-step research process:

1. **Understand the Decision** — clarify purpose, audiences, and what evidence is needed.
2. **Design the Study** — choose appropriate methods, sampling considerations, instruments, safeguards, and workplan.
3. **Engage & Collect** — respectful fieldwork, interviews, surveys, observation, or desk research.
4. **Verify & Analyze** — data-quality review, patterns, triangulation, and interpretation.
5. **Translate Insights** — clear narrative, data visualization, practical recommendations, and limitations.
6. **Support Learning** — share findings, discuss implications, and help stakeholders use evidence responsibly.

Create dedicated sections for **Mixed-Methods Thinking**, **Ethics and Informed Consent**, **Data Quality**, **Inclusion & Accessibility**, and **Actionable Communication**. Speak of ethical principles as commitments/standards, not fabricated audit compliance. No made-up IRB endorsements or claims of ISO certifications.

Consider a bespoke CSS/SVG research-process diagram with strong responsiveness and reduced-motion behavior.

## 5.6 RESEARCH APPLICATIONS — `/work`

We do not currently have confirmed completed project details. Therefore **DO NOT fabricate “Case Studies,” past clients, budgets, research sample sizes, results, or impact metrics.** Instead make this page a compelling editorial showcase titled **“Research in Practice: Illustrative Applications.”**

At the top, provide an unmistakable explanation: **“The examples below illustrate how research can inform real decisions. They are not descriptions of completed Mirror Metrics client projects.”**

Include 4–6 visually rich **hypothetical research scenarios**, for example:

- Understanding what builds trust in digital financial services
- Exploring how families experience access to essential services
- Identifying unmet needs of urban consumers and small enterprises
- Listening to women entrepreneurs about market barriers and opportunities
- Learning from agricultural livelihoods and value-chain experiences
- Assessing how youth perceive employment and skills pathways

Each scenario contains a plausible **research question**, **possible research approach**, and **decisions it could inform**; do not include invented outcomes or claims about studies undertaken. Build the content system so the owner can easily replace these scenarios with real case studies later. Each scenario can expand via accessible accordion or go to a detail section, but no dead links.

## 5.7 INSIGHTS — `/insights` AND `/insights/[slug]`

Build a clean article listing with featured story, category filters if useful, and 4 or more real pages with original, non-statistical, evergreen editorial commentary. No misleading claims that the articles summarize actual Mirror Metrics field research. Suggested topics:

1. **Why Local Context Matters in Research Design** — Bangladesh-focused perspective on survey wording, language, social dynamics, and context.
2. **Beyond the Numbers: What Qualitative Research Adds** — the role of listening and observation alongside survey evidence.
3. **Designing Research That Includes More Voices** — inclusion, gender, disability considerations, and ethical participation.
4. **From Data to Decisions: Communicating Research Clearly** — turning complexity into honest, usable insights, including uncertainty.
5. Optional: **What Makes Market Research Useful for Emerging Businesses?**

Each article should have an engaging title, original abstract, credible full text (preferably 500–900 useful words each), headings, one relevant licensed photo if available, and related reading links. The copy can explain general principles but cannot fabricate survey statistics, findings, journal references, quotes, or partnerships. Add an **“Editorial perspective”** label to distinguish it from original empirical research. Do not display a fake author name. An organizational byline “Mirror Metrics Editorial” is acceptable if clearly a house byline; publication dates only if known and genuine.

Keep article content in a simple local structured source (`src/content/insights.ts`, `.mdx` files, or equivalent), easy for non-developers to update. Generate static routes when possible.

## 5.8 CONTACT — `/contact`

- Premium but friendly intro: **“Let’s turn your questions into useful evidence.”**
- Explain possible inquiry types: new research project, evaluation, consumer study, partnership, or general enquiry.
- Contact form fields: **Name, Work Email, Organization (optional), Area of Interest (select), Message, Consent acknowledgement**. Include clean labels, validation, accessible errors, successful-submission state, and anti-spam honeypot.
- Only claim successful sending after the server confirms successful dispatch. Never simulate success with a `setTimeout` or fake toast.
- If email-service environment variables are configured, submit server-side using a trustworthy transactional-email service such as **Resend** via a secure Next.js route handler/server action. Use Zod validation, a simple spam-control strategy, reasonable length limits, and no secret keys exposed in browser code.
- If transactional email is NOT configured, present a truthful configuration-needed state and (only if a real email address is known) a working `mailto:` fallback. Do **not** send to an invented `info@...` address or show a fake working form.
- Do not make up phone numbers, physical offices, a map pin, or social URLs. If the owner later provides them, enable them via `src/config/site.ts`.
- Optional trust note: inquiries will be handled thoughtfully, with a link to the accurate Privacy page. Do not promise specific response times unless provided.

## 5.9 PRIVACY — `/privacy`

Create a succinct privacy statement that matches the implementation. Explain contact-form data fields, why they are requested, how emails are handled, whether analytics/cookies are actually used, and how to request removal/contact the site (only when a valid contact route is configured). Clearly identify any sections that require legal review prior to public use. Do not paste a fake lawyer-approved policy or claim compliance with a specific law without verification.

## 5.10 404

Custom branded 404 page with tasteful eye motif or image and a clear “Back to Home” control.

---

# 6. UNIQUE COMPONENTS AND INTERACTIONS

Build reusable components with excellent fit and finish:

- `SiteHeader`: responsive, sticky, desktop nav, accessible mobile menu, keyboard focus management, close on route change and Escape.
- `BrandLogo`: proper image and textual legal-name handling with a usable fallback.
- `HeroEditorial`: full-bleed/split editorial hero that can be reused with different images and copy.
- `SectionIntro`: eyebrow, title, intro text, optional CTA.
- `ImageTextFeature`: alternating image/text editorial feature with art-directed image positions.
- `ServiceCard`, `SectorCard`, `InsightCard`, `ApplicationCard`: visually related but not boring or identical.
- `ApproachTimeline`: responsive research process, semantic steps and small informative accents.
- `CallToAction`: strong dark/photo closing panel.
- `ContactForm`: accessible, working when configured, with honest fallback behavior.
- `SiteFooter`: navigation, legal name, contact options if verified, copyright year computed normally.
- `Breadcrumbs`: on deeper pages where useful, with sensible semantics.
- A small **Back to top** interaction is okay if unobtrusive and keyboard accessible.

Motion should support storytelling, never distract from photos, cause layout instability, or delay reading. No nonfunctional buttons, no placeholder navigation, and no generic loading spinners without actual asynchronous content.

---

# 7. TECHNICAL STACK AND ARCHITECTURE

Use a maintainable, current, Vercel-friendly stack:

- **Next.js (App Router)** with **TypeScript** and React, using an appropriately current stable release supported by the target environment.
- **Tailwind CSS** with design tokens and a polished base stylesheet. Use CSS Grid/Flexbox and components rather than a large monolithic page file.
- **`next/image`** for image optimization and `next/font` for web typography.
- **Lucide React** icons if needed; icons should support typography, not dominate it.
- **Zod** for server-side form validation, **Resend** optionally for contact email. Do not require Resend merely to build static pages.
- Use client components **only where needed** (navigation state, menu, form, small animation). Prefer server-rendered/static content for speed and SEO.
- Avoid introducing a database, CMS, authentication, overengineered global state, or expensive paid API for this first release.
- Content-driven data models and single-source central site config. All image paths, services, sectors, research scenarios, and articles must be easy to update.

### Recommended repository structure

```text
mirror-metrics-website/
├── public/
│   ├── brand/
│   │   ├── logo-original.jpg          # owner's file if provided
│   │   ├── logo-header.webp           # optimized if generated
│   │   └── eye-icon.png               # derived if feasible
│   └── images/                       # licensed, optimized Bangladesh photos
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── sectors/page.tsx
│   │   ├── approach/page.tsx
│   │   ├── work/page.tsx
│   │   ├── insights/page.tsx
│   │   ├── insights/[slug]/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── api/contact/route.ts       # only if implementing working service
│   │   ├── privacy/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   ├── sections/
│   │   ├── cards/
│   │   ├── ui/
│   │   └── forms/
│   ├── config/site.ts
│   ├── content/
│   │   ├── services.ts
│   │   ├── sectors.ts
│   │   ├── applications.ts
│   │   └── insights.ts
│   └── lib/
├── docs/
│   ├── IMAGE_CREDITS.md
│   ├── CONTENT_EDITING.md
│   └── LAUNCH_CHECKLIST.md
├── .env.example
├── .gitignore
├── package.json
├── README.md
└── [other required project/config files]
```

This is illustrative; adapt structure to the actual installed Next.js version and keep imports valid. If starting from an existing repository, inspect and adapt it instead of destructively rewriting unrelated project files.

### Configuration

Centralize editable details in `src/config/site.ts`:

- Registered company name, short display name, description, positioning line.
- Public base URL (environment variable `NEXT_PUBLIC_SITE_URL`, with safe local default).
- Contact email, phone, address, and social links **optional** and empty until provided.
- Primary navigation labels/routes and footer groups.
- Brand colors where applicable.
- SEO metadata defaults.

Do not print `undefined`, a blank link, placeholder email, or `[Your Address]` in the public UI.

### Contact environment example

Provide a safe `.env.example` with comments explaining:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Set these only after verifying the receiving address and sender domain:
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
RESEND_API_KEY=
# Optional publicly visible address for mailto fallback, only when confirmed:
NEXT_PUBLIC_CONTACT_EMAIL=
```

Never commit `.env.local`, real API keys, access tokens, or user-submitted form data. The code should build and run on Vercel without the optional contact env variables; only actual form delivery depends on them.

---

# 8. SEO, ACCESSIBILITY, PERFORMANCE, AND SECURITY

## SEO and sharing

- Meaningful, unique page titles and meta descriptions built around the actual brand and Bangladesh research keywords, without keyword stuffing.
- Correct H1 per page and semantic H2/H3 structure.
- Open Graph and X/Twitter metadata, canonical URLs when site URL is configured, and a branded social-share image if feasible using the supplied logo and original visual elements.
- Sitemap and robots appropriate for a public site.
- `Organization` JSON-LD using only verified facts (exact name, organization description, site URL, country). Do not invent founding date, contacts, awards, reviews, or postal address.
- All links point to real routes or known configured destinations.

## Accessibility

- Target **WCAG 2.2 AA** fundamentals; semantic HTML landmarks, skip-to-content link, keyboard-operable nav and forms, visible focus states.
- Buttons should be buttons, links should be links; descriptive link text.
- Correct labels, errors linked to fields, announcements for success/failure, and high enough color contrast.
- All meaningful photos have accurate alt text; decorative images may have empty alt text.
- Animate only modestly, support `prefers-reduced-motion`, and don't hide content behind scroll animation.

## Performance

- Aim for Lighthouse **90+** Performance/Accessibility/Best Practices/SEO in typical desktop checks, recognizing external factors may affect scores; never fake results.
- Avoid layout shift, huge raw JPGs, unnecessary client-side JS, autoplay videos, and heavyweight animation dependencies.
- Use WebP/AVIF local images, responsive sizes, hero image priority, lazy load below the fold, good caching.
- Prefer static rendering for content pages and efficient fonts.

## Form/security

- Validate and sanitize inputs on the server; do not trust client-only validation.
- Keep secrets in server-only environment variables.
- Prevent HTML/script injection into email output and guard against header injection.
- Use an anti-spam honeypot, sensible payload size limits, and documented operational spam protections. Do not claim reliable distributed rate limiting if no persistent storage/edge protection is present.
- Use concise error responses that do not leak secrets or stack traces.
- No trackers or cookie banners by default; only add analytics if intentionally configured, and keep the Privacy page accurate.

---

# 9. RESPONSIVE ART DIRECTION

Do more than shrinking desktop content:

**Desktop (≥1200 px):** broad editorial composition, large photographic hero, 12-column rhythm, controlled negative space, offset image/text sections, varied card sizes. Primary heading can be 64–90 px if it wraps attractively.

**Tablet (~768–1199 px):** readable 2-column content blocks, adjusted image ratios, no cropped or overlapping text, compact nav as needed.

**Mobile (320–767 px):** edge-to-edge or elegantly inset hero image, headline with 34–48 px fluid sizing, comfortable line lengths, a usable mobile menu, 1-column card stacks, buttons with accessible touch targets, full-width inputs, and natural image focal points. Avoid tiny body type, overlapping logo, or hidden CTAs.

Test screenshot-style visual composition of **home, services, insights detail, and contact** at desktop and phone widths; polish until spacing, image cropping, alignment, and typography feel intentional.

---

# 10. EXACT BUILD ORDER — EXECUTE THE WORK

Follow this order, but do not stop after any planning step:

1. **Inspect the repository** (`pwd`, files, package manifest, available logo/images) and verify its actual starting state.
2. **Review the reference** https://www.dalbergdesign.com/ if browser access exists, focusing on design principles and page composition. Do not download/copy its brand content or code.
3. **Initialize/adapt Next.js** + TypeScript + Tailwind, install only necessary packages, set scripts (`dev`, `build`, `start`, `lint`, `typecheck` as appropriate).
4. **Integrate supplied logo** using the rules above and create brand CSS tokens. Note any missing logo asset honestly.
5. **Source and optimize Bangladesh photographs legally**, maintain the image-credits file, ensure real assets actually load. If sourcing is blocked, explicitly document the gap.
6. **Build the design system and shared header/footer**, including responsive behavior and accessibility.
7. **Implement the full Home page** with original copy, strong visuals, all working navigation, and mobile layouts.
8. **Implement every required inner page**, including 4+ full original insight articles, research scenarios that are transparently illustrative, and a truthful contact workflow.
9. **Add site SEO, sharing metadata, sitemap, privacy page, 404, and polished micro-interactions.**
10. **Run lint, type checking, and production build.** Fix warnings/errors that affect production. If relevant, run basic automated tests and manual route/link checks.
11. **Check responsive layouts**, image loading, focus states, and mobile menu functionality. Fix all observable defects.
12. **Write documentation** for non-technical owner editing and GitHub/Vercel launch, including exact environment variables and photo licensing.
13. **Summarize delivered work** with exact commands, known missing owner-provided information, and honest verification results.

Use available tooling to run commands and inspect the built application. If a dependency API has changed, follow the installed version's real syntax. Avoid stale Next.js examples.

---

# 11. GITHUB + VERCEL DEPLOYMENT REQUIREMENTS

The finished project must be straightforward to host on **Vercel** from a **GitHub repository**.

Provide a clear README with:

### Local development

```bash
npm install
npm run dev
```

Then browse `http://localhost:3000`.

### Quality checks

```bash
npm run lint
npm run typecheck
npm run build
```

Adapt scripts so these commands actually exist. Do not write documentation for nonexistent commands.

### Deployment

1. Initialize/commit Git repository if not already under source control (do not overwrite existing history).
2. Push the project to the owner's GitHub repository using the owner's own credentials; never ask Codex to embed tokens or secrets in the code.
3. In Vercel, select **Add New → Project → Import Git Repository**.
4. Confirm framework detection is **Next.js** and build command matches `npm run build`.
5. Configure optional contact email environment variables in Vercel only after real addresses and credentials are obtained.
6. Deploy and check all pages, images, favicon, metadata, menu, and forms on the live `*.vercel.app` domain.
7. To add a custom domain later, set the domain and update `NEXT_PUBLIC_SITE_URL` appropriately, then redeploy.

Do **not** require a custom domain or paid service merely to show the site. The site must function as a public, polished information website on a free/standard Vercel deployment without an API key. Clearly document that contact email delivery requires configuration.

Do not include deployment instructions that require exposing private secrets publicly, and do not silently claim deployment was performed unless it actually was.

---

# 12. ACCEPTANCE CHECKLIST — DEFINITION OF DONE

The assignment is complete only if the following conditions are met (or missing external inputs are explained plainly):

### Brand and design
- [ ] Site displays **Mirror Metrics Research and Consultancy Ltd** accurately.
- [ ] Supplied logo is used if available; if not, implementation clearly supports adding it.
- [ ] The site's visual identity uses the logo's navy, blue, and teal without becoming generic.
- [ ] Home page has distinctive, premium editorial art direction inspired by the reference's quality, not copied assets/design.
- [ ] The majority of hero/service/sector photography is identifiable as contextually Bangladeshi and licensed appropriately.
- [ ] No third-party watermarks or unlicensed stolen imagery.

### Content and trust
- [ ] No fabricated client logos, projects, years in business, staff, testimonials, statistics, awards, certifications, or quotes.
- [ ] Illustrative scenarios are clearly disclosed as illustrative and not past projects.
- [ ] At least four meaningful original articles render on individual URLs.
- [ ] No filler text, template slogans, broken internal navigation, or dead CTAs.

### Functionality
- [ ] Every required route loads correctly and has unique purpose-driven design.
- [ ] Mobile menu functions on touch, keyboard, Escape, and route change.
- [ ] Images load, display appropriate crops, and don't cause visible layout shifts.
- [ ] Contact form sends a real email when configured; when unconfigured, it clearly says so and never fakes a successful send.
- [ ] Custom 404, sitemap, robots, metadata, and accurate privacy page exist.

### Engineering
- [ ] TypeScript/ESLint/build pass (or every blocker is recorded truthfully).
- [ ] Responsive experience polished at mobile, tablet, and desktop sizes.
- [ ] Keyboard navigation, focus, alt text, contrast, and form validation are addressed.
- [ ] No exposed secrets or hard-coded fake business details.
- [ ] README + `.env.example` + `docs/IMAGE_CREDITS.md` + owner content-editing instructions exist.
- [ ] Project is ready for a clean GitHub push and Vercel import.

---

# 13. WHAT YOU MUST DELIVER AND REPORT AT THE END

**Create all implementation files in the repository.** Do not respond with only a code snippet or a design description.

At the end of your coding session, provide a compact but detailed completion report covering:

1. **What was built** — routes, primary components, article system, image library, contact behavior.
2. **Design choices** — how the original Mirror Metrics identity was built and how the editorial reference influenced the result without copying it.
3. **Files/structure** — where owner can edit services, sectors, articles, contact info, images, and logo.
4. **Verification results** — explicitly say which of `npm run lint`, `npm run typecheck`, `npm run build`, and any browser tests ran and whether they passed.
5. **Exact GitHub/Vercel steps** — using actual repo configuration and environment variable names.
6. **Owner inputs still required** — e.g., official contact email, real team biographies, verified project case studies, legal/privacy review, and/or access to the supplied logo if missing.

**Final instruction:** You have permission to make reasonable design and implementation decisions and to build the website thoroughly. Prioritize an impressive, genuine, functional result over placeholders or lengthy planning discussion. Keep all factual company claims honest, respect image rights, and make every part production-ready for deployment on Vercel.
