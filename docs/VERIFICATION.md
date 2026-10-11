# Verification

The project is a review build and is not deployed. The live original website remains untouched.

## Verified local checks: 11 October 2026

The final `npm run check` completed successfully after the mobile navigation and browser-test fixes:

- ESLint: passed with zero errors and zero warnings
- Strict TypeScript: passed
- Source-data tests: all 12 passed, covering treatment/article/product/variant counts, local image presence, consultation requirements, exact social/booking URLs and staging safeguards
- Static production build: passed; Next.js generated 115 pages
- Export checks: passed; 113 source routes, 116 HTML files and 4,198 internal references checked, with zero missing references

The npm environment printed a non-blocking `http-proxy` configuration warning. It did not cause a check failure.

## Browser and exact-commit CI status

Browser customer journeys and exact-commit GitHub Actions have not yet been verified. Their test coverage is implemented and awaiting execution:

- Chromium desktop and 360/390/430/768px layouts
- All source routes render, with one H1, staging noindex, canonicals and no horizontal overflow
- Mobile menu repeated open/close, Escape, focus restoration, navigation and Back
- Treatment category filters
- Product search, category filters, empty state, reset and product handoff
- Contact FAQ, social, phone and booking links

No real appointment or purchase is submitted during tests. The GitHub Actions workflow is configured to upload screenshots and browser test reports as artifacts when it runs. Passing local checks are not a browser or CI success claim.

## Local browser limitation

The research browser could inspect the original public website. The isolated build environment's local HTTP listener was not reachable by that browser, and file URLs are unsupported. The planned browser verification uses ordinary GitHub Actions, the same static export and official Playwright Chromium, without creating a deployment.
