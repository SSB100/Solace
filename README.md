# Solace Aesthetics

A considered, responsive rebuild of Solace Aesthetics, ready for design review. Original botanical identity and public business content are retained, with a full-width, treatment-led design in warm ivory, pale sage and copper. Stephanie's portrait is reserved for Our Story.

**Protected design review.** Current deployment URL and exact-commit verification are recorded in [PR #1](https://github.com/SSB100/Solace/pull/1). Automatic Vercel Git deployments remain disabled. The existing live website, booking system and domain are unchanged; this branch is not a live-domain release.

## Develop

Node 24 and npm are recommended.

```sh
npm ci
npm run dev
```

## Verify

```sh
npm run check
npx playwright install chromium
npx playwright test
```

Next.js static export is written to `out/`. GitHub Actions runs the same checks and real Chromium customer journeys, then uploads desktop/mobile screenshots and a test report. No credentials or production services are used by the tests.

## What is included

- Full-width responsive customer site, treatment-led homepage, mobile navigation and booking actions
- Custom booking visual preview: treatment selection, illustrative date/time and a non-binding review
- On-site demo product galleries, variant selection, anonymous basket and checkout preview
- Ten treatment categories and 61 published treatment options
- Searchable 73-product catalogue with all 80 existing variants
- Twelve original Solace Edit articles, retained at their existing paths
- Both original policy pages and the nine category URLs
- Verified Ovatu booking links, Orewa address, phone, email and supplied Instagram/Facebook links
- Local, optimised imagery and fonts; no third-party tracking, database or simulated submission forms
- Route-specific metadata, canonical URLs and a sitemap

## Intentional launch holds

All pages remain `noindex`, and the robots file blocks indexing. Booking and commerce interfaces are explicitly visual previews: no appointments, orders or payments can be made. The basket stores only anonymous product choices locally. Live appointment links remain explicit; booking choices are neither saved nor transmitted. A domain cutover requires a separately approved real booking/commerce implementation, content sign-off and the [launch checklist](docs/LAUNCH-CHECKLIST.md).

## Documentation

- [Research and design decisions](docs/DESIGN-BRIEF.md)
- [Competitor research](docs/COMPETITOR-RESEARCH.md)
- [Source route inventory](docs/source-url-inventory.json)
- [Catalogue and image provenance](docs/CATALOGUE-SOURCES.md)
- [Editorial archive](docs/EDITORIAL-ARCHIVE.md)
- [Launch checklist](docs/LAUNCH-CHECKLIST.md)
- [Verification](docs/VERIFICATION.md)

Public source content was captured on 11 October 2026. Treatment descriptions have been conservatively edited; original article/product copy is archived without adding new treatment claims. Clinical/advertising review and provider approval remain part of launch preparation.

The current creative direction is documented in [Creative revision 3](docs/CREATIVE-REVISION-3.md): a quieter homepage, progressive treatment disclosure, centered content, green branding and brushed-brass details.
