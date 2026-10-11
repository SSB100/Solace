# Launch checklist: deliberately not a deployment approval

## Review build safeguards

- `vercel.json` sets `git.deploymentEnabled: false` for every branch.
- Metadata has `index: false, follow: false`.
- `public/robots.txt` disallows crawling.
- Vercel headers include `X-Robots-Tag: noindex, nofollow, noarchive`.
- No production deployment or domain change is part of this build.

## Before an approved preview

- Verify the intended Vercel project and source branch/commit.
- Keep the existing SSO protection and staging noindex safeguards.
- Review CI screenshots and customer journeys for the exact commit.
- Decide whether to create a preview; disabling Git deployments does not prohibit an explicitly authorised manual preview.

## Before replacing the live domain

1. **Owner content sign-off.** Confirm current address, contact details, prices, durations, packages, consultation rules and patch tests. Resolve Signature Trio's duration typo and Surrender's 90-minute vs component-duration conflict. No opening hours were invented.
2. **Clinical / advertising review.** Check retained product and journal efficacy statements with the business's qualified reviewer. New marketing descriptions are intentionally conservative. Confirm rights to all existing reused imagery, including original licensed stock and product-brand assets.
3. **Commerce migration.** Choose and verify a stable, authorised storefront subdomain/hostname or a separately approved replacement checkout. Current sourceUrl values point to the existing canonical domain and are only valid for the review stage. Test current stock, variants, cart, taxes, shipping, refunds and payment completion in the chosen system. Do not cut over while checkout links would loop back into the static catalogue.
4. **Enquiries/newsletter.** Current phone/email work without a backend. If a form or newsletter is wanted, agree its processor, privacy terms and delivery destination, implement real delivery, then test it. Do not add fake success states.
5. **SEO baseline.** Export Search Console/analytics evidence for actual indexed pages and backlinks. The included source sitemap inventory covers 112 published URLs but cannot prove there are no additional historical pages, image URLs, category query URLs or backlinks.
6. **URL preservation.** Every inventory path is represented. `/home` should permanently redirect to `/`. Preserve product/category/article slugs. Map any additional discovered old paths to genuine equivalents; do not redirect all unknown pages to the homepage. Test slash handling and 404 responses on the final host.
7. **Controlled indexing change.** For the approved canonical domain release, update all three noindex layers together, serve an indexable robots file referencing the included sitemap, and keep preview hosts non-indexable or redirected as appropriate. Review canonical URLs, Open Graph image URLs, schema and page descriptions.
8. **Practical customer QA.** Check desktop and 360/390/430px phones, keyboard and screen reader navigation, tap targets, font scaling, reduced motion, phone/email/map links, FAQs and menus including Back/Escape/repeated clicks. Verify current Ovatu booking destinations without making an unintended booking.
9. **Platform and rollback.** Confirm commercial hosting plan suitability, correct repo/production branch, domains/DNS, HTTPS, compression/caching and rollback plan. Make a clean, approved release commit before enabling deployment.
10. **After launch.** Verify exact deployed commit, live source routes, no accidental noindex, canonical redirects, sitemap availability, real checkout and enquiry delivery. Monitor errors and Search Console coverage.

The old live site and its data remain untouched throughout this review build.
