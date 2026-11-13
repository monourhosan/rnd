# Verification record

Checked locally on **14 November 2026** (Asia/Dhaka), including the subsequent reference-led redesign requested by the owner.

## Automated checks
- `npm run lint`: passed without warnings.
- `npm run typecheck`: passed.
- `npm test`: five tests passed. These cover input bounds, consent, invalid email/header input, honeypot rejection, actual handler origin/configuration checks, malformed/oversized requests, provider acceptance/rejection/missing receipt/exception, and in-process throttling. Provider fetches are mocked; no real enquiry email was sent.
- `npm run build`: passed with Next.js 16.4.6. All content pages are prerendered; Contact, Privacy and the contact API run on the server.
- `node scripts/check-routes.mjs`: the original version passed against development and production servers. The revised design was rechecked against a production-mode server: 13 content routes, 488 internal links/anchors, custom 404 behavior, 15 assets/SEO endpoints, unavailable contact (503), and cross-origin rejection (403) all passed.
- `npm audit`: zero reported vulnerabilities after the Sharp upgrade and narrow lint-toolchain minimatch override. `npm audit --omit=dev` also reported zero.
- Supplied root logo and preserved original have identical SHA-256 hashes.

## Browser checks
- Home, Services, the local-context article, and Contact checked at actual CSS viewport widths of 320, 375, 768, 1024 and 1440 pixels. No horizontal overflow; one H1 on each page.
- Revised desktop/mobile compositions inspected, including the full-width hero, contained purpose banner, original research graphic, service-page banner, About page and application grid. Local logo, hero and service images loaded. The five application-grid images were confirmed loaded in the browser. All eight source-photo assets also returned 200 in route checks.
- Mobile menu: opens with focus in the dialog; Shift+Tab from first control wraps to the last link; Tab from last link wraps to Close; Escape closes and restores focus to Menu; choosing a route closes the menu and removes body scroll locking.
- Service anchors resolve below the sticky header.
- Unconfigured enquiry controls and submit button are disabled; the explanatory availability notice is visible. Privacy explains that same state.
- Screenshots are stored in `docs/screenshots/`. Files beginning with `reference-` show the current design; older captures retain the first version for comparison. These are verification captures, not generated design mockups.

## Limits
- No GitHub remote, account push, Vercel import, custom domain, or public deployment was performed.
- Real inbox delivery needs verified owner configuration and a live end-to-end check. Only mocked provider acceptance/failure paths were exercised.
- Lighthouse and a formal WCAG audit were not run; no scores or certification are claimed. Keyboard, semantics, focus, labels, reduced motion and responsive layout were addressed and inspected.
- Model/property release documents were not independently obtained. Image-source and exact-subject limitations are in IMAGE_CREDITS.md.
- Owner review of capability claims, contact/privacy details, and actual retention/hosting arrangements remains necessary before public launch.
