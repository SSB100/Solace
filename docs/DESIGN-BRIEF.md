# Solace customer experience rebuild

Research captured 11 October 2026 from https://www.solaceaesthetics.co.nz/, its public collection data and sitemap, its linked booking provider, and four comparable New Zealand studios.

## Direction

Keep the recognisable gold botanical mark, original monstera imagery and serif identity. Refine them into an editorial studio experience: deep forest green, warm ivory, muted gold, considered white space, large readable headings and authentic existing practitioner imagery. Avoid decorative numbering, oversized empty interface cards, invented testimonials and stock imagery presented as Solace's actual premises.

The original site uses Libre Baskerville. The rebuild retains that heading family, paired with locally served DM Sans for legible navigation and body copy. Fonts use the SIL Open Font License; licences are retained with the font files.

## Customer priorities

1. Know immediately what Solace offers and where it is.
2. Find a suitable treatment without reading an unstructured menu.
3. Understand any consultation or patch-test requirement before booking.
4. Meet the person providing care.
5. Reach a real appointment system, phone or email with one clear action.
6. Browse home care without pretending a new checkout is connected.

The homepage pairs a distinctive botanical hero with founder introduction, four entry-point treatments, the existing Solace Bespoke offer, first-visit guidance, home-care products and the journal. Treatment filters and product search use local data; all pages still contain useful server-rendered content before JavaScript.

## Research applied

See COMPETITOR-RESEARCH.md for the full sources. Smooth by Adina informed the first-visit journey; Michelle Lett's menu informed prices/durations beside the choice; Divine informed practitioner-led care and clear introductory choices; Pucker & Wink informed practical visit details and service separation. No competitor artwork, testimonials or treatment copy was imported.

## Source reconciliation

- **Location:** the current footer and Ovatu booking notice confirm Unit I, 17–19 Cammish Lane, Orewa, for appointments from 1 June 2026. Older Warkworth metadata was not treated as a second location. Orewa appears consistently in the rebuild.
- **Experience:** Stephanie's existing biography supports a decade in the beauty industry and psychology studies at Massey. No clinical registration, precise degree title or new qualification was invented.
- **Pricing:** source prices and durations are retained. Missing prices are not fabricated. The booking provider remains the current availability/appointment-detail source.
- **Consultation:** the electrolysis requirement is at least 24 hours before treatment; alkaline treatments require a patch test. These appear prominently on treatment pages.
- **Source issues:** Signature Trio has a duration typo; Surrender's listed session duration conflicts with its component durations. Both require provider confirmation before launch. Details are recorded in the research brief.
- **Policies:** original published policies remain intact and are distinguished from this static review build's functionality.
- **Product/journal claims:** retained source content needs an owner/professional advertising review, especially medical/efficacy wording. No new guaranteed outcome or testimonial was added.

## Architecture

Static Next.js, TypeScript, local JSON, ordinary CSS and minimal client interaction. No database or new account integration is required for this review. The exported website can be hosted statically. All current sitemap paths are represented, with `/home` prepared as an alias/redirect to `/`. Product and article URLs, including historical opaque slugs, remain unchanged.

## Commerce and enquiry boundaries

The existing source site has live commerce, whereas this build is an approved pre-deployment review. Product pages link explicitly to the existing storefront; no fake cart, payment flow or stock availability has been created. Booking links use the verified Ovatu destination. Contact is real email/phone rather than a form that appears to submit but cannot deliver. Newsletter signup is omitted until a storage/provider destination is confirmed; the original page exposed a missing-storage configuration warning.

The supplied social links are retained exactly, including the Facebook profile query ID. They are normal accessible outbound links, not third-party tracking/feed embeds.
