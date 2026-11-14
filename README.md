# Mirror Metrics

An original editorial website for **Mirror Metrics Research and Consultancy Ltd**, built with Next.js App Router, TypeScript, React, Tailwind, local licensed photography, and the owner's supplied logo.

The reviewed specification is [Mirror_Metrics_Codex_Website_Prompt.revised.md](Mirror_Metrics_Codex_Website_Prompt.revised.md). [Review notes](docs/BRIEF_REVIEW.md) explain the revisions; the supplied brief is preserved in [docs/ORIGINAL_BRIEF.md](docs/ORIGINAL_BRIEF.md).

## Run locally

Use Node **24 LTS** and npm. From this project directory:

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. Development binds only to the local machine. For a production preview, run `npm run build`, then `npm start`.

Node was not originally on this computer's PATH. A portable official distribution is available in ignored `.tools/node-v24.22.3-win-x64`. On this machine, a PowerShell session can use it with:

```powershell
$env:Path = "$pwd\.tools\node-v24.22.3-win-x64;$env:Path"
npm run dev
```

## Checks

```sh
npm run lint
npm run typecheck
npm test
npm run build
```

The tests exercise enquiry validation and honest delivery configuration without sending mail. Node 24's built-in TypeScript support is used for these tests. A narrow minimatch override pins the ESLint parser's transitive dependency to a patched version; review it when updating the lint toolchain.

## Included

Home, About, Services (six linked sections), Sectors (eight areas), Approach, Illustrative Applications (six scenarios), Insights (four full original articles and detail URLs), Contact, Privacy, 404, metadata, sitemap, robots, icons and social image. Shared responsive navigation uses a native modal dialog for focus containment and Escape handling. Images are local WebP assets served through `next/image`; font files are self-hosted by `next/font`.

No clients, project outcomes, personnel, contact details, dates of publication or achievements have been fabricated. The work scenarios are explicitly illustrative. The articles are house editorials, not empirical study reports.

## Configuration

Copy `.env.example` to `.env.local` for local values. Never commit `.env.local` or API keys.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Real HTTPS production origin for canonicals, sitemap, share URLs and indexing; absent/local values keep indexing disabled |
| `CONTACT_TO_EMAIL` | Verified recipient, server-only |
| `CONTACT_FROM_EMAIL` | Bare verified sender email, server-only |
| `RESEND_API_KEY` | Resend key, server-only |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional verified public address for mailto links |

Browsing and building need no API key. Without all three valid server delivery values the form is disabled and the API returns 503. With configuration, validation and a honeypot run server-side, requests have size limits and origin checks, and delivery is accepted only after a Resend receipt. No contact database or analytics are installed. In-process throttling is best-effort; use hosting controls for production abuse prevention.

## Edit content

### Homepage news

The compact **In the news** section automatically reads the public economy/business RSS feeds from The Business Standard and The Daily Star, plus The Daily Star's environment feed. It displays up to three recent, relevant headlines with publisher attribution, dates, and original article links; it does not reproduce full articles or images. Feed URLs and relevance rules live in `src/lib/news.ts`.

`/api/news` caches successful results using an hourly key in Next.js's Data Cache. The first request in each new hour fetches fresh feeds; open homepages check for updates every hour, retry failures after five minutes, and refresh when returning to a tab if due. This is request-driven, so idle sites do not need a background cron job or an API key. The host must run Next.js with outbound HTTPS access (a static export is insufficient). Failed feeds are isolated; if all feeds fail or contain no relevant stories from the last 14 days, the section shows an availability message. An open page retains its previous headlines with a delay notice if a refresh fails.

See [CONTENT_EDITING.md](docs/CONTENT_EDITING.md). Configuration lives in `src/config/site.ts`; services, sectors, applications, images and articles each have a file under `src/content/`. Photo sources and limitations are documented in [IMAGE_CREDITS.md](docs/IMAGE_CREDITS.md).

## GitHub and Vercel

This is a local repository with no remote configured and no public deployment. Create an empty repository in the owner's GitHub account. With the owner's authenticated Git tooling, replace `OWNER` and `REPOSITORY` below:

```sh
git add .
git commit -m "Build Mirror Metrics research website"
git branch -M main
git remote add origin https://github.com/OWNER/REPOSITORY.git
git push -u origin main
```

Do not add secrets or tokens to the URL or source. In Vercel select **Add New → Project → Import Git Repository**, select this repository, choose **Next.js**, Node **24**, and `npm run build`. Leave the output directory at its Next.js default. Deploy without contact secrets if delivery is not ready.

After Vercel returns the real HTTPS URL, set `NEXT_PUBLIC_SITE_URL` to that origin and redeploy to enable public canonical URLs, sitemap and indexing. Add verified contact values only after sender verification and privacy review. Run through [LAUNCH_CHECKLIST.md](docs/LAUNCH_CHECKLIST.md).

## Owner inputs still needed

Verified enquiry/privacy email and delivery credentials; confirmation of proposed offerings; photo use/release review; privacy/retention decisions. Real team biographies or completed case studies can be added later if supplied. They are not required to browse the current website.
