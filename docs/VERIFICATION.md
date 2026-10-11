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

[GitHub Actions run 38101474062](https://github.com/SSB100/Solace/actions/runs/38101474062) passed all 10 Chromium customer journeys for build commit `c4752bff60fd3c1379fbead884061dff092bfee2` (the PR merge tree is identical to that source tree). Coverage includes:

- Chromium desktop and 360/390/430/768px layouts
- All source routes render, with one H1, staging noindex, canonicals and no horizontal overflow
- Mobile menu repeated open/close, Escape, focus restoration, navigation and Back
- Treatment category filters
- Product search, category filters, empty state, reset and product handoff
- Contact FAQ, social, phone and booking links

No real appointment or purchase is submitted during tests. The GitHub Actions workflow uploads screenshots and browser reports as artifacts. A final screenshot-preparation refinement loads off-screen images and resets scroll before full-page capture; the final branch commit is rechecked separately in CI. No real appointment or purchase is submitted.

## Local browser limitation

The research browser could inspect the original public website. The isolated build environment's local HTTP listener was not reachable by that browser, and file URLs are unsupported. Browser verification uses ordinary GitHub Actions, the same static export and official Playwright Chromium, without creating a deployment.

## Dependency review

`npm audit --omit=dev` reports zero production-dependency vulnerabilities. The full development audit reports five dependency-chain entries for one `braces` stack-exhaustion advisory (GHSA-vfj7-8cjw-p6xm) through the Next ESLint plugin / fast-glob / micromatch. The [upstream advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) lists no patched release as of 11 October 2026. This tooling consumes fixed repository globs; it is not shipped in the static customer site. Do not apply npm’s suggested Next/ESLint major downgrade automatically. Track the upstream patch before changing lint tooling.
