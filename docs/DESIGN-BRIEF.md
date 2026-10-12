# Solace customer experience rebuild

Research captured 11 October 2026 from https://www.solaceaesthetics.co.nz/, its public collection data and sitemap, its linked booking provider, and four comparable New Zealand studios.

## Current direction

The latest owner feedback and homepage composition are documented in [CREATIVE-REVISION-4.md](CREATIVE-REVISION-4.md). The current homepage balances clear discovery with a fuller studio narrative: a treatment-led photographic hero, four illustrated treatment routes, a green approach feature, one homecare composition, and practical first-visit/location guidance. Centered content, progressive treatment disclosure and decorative brushed brass are retained. This builds on the hierarchy correction in revision 3 and supersedes the historical second-pass direction below.

## Previous second-pass direction

The refined direction is treatment-led, with an edge-to-edge composition specific to Solace's breadth of services. Retain the gold botanical logo and original treatment imagery; use warm ivory, pale sage and visibly copper/gold accents rather than large dark-green surfaces. The homepage does not show the founder portrait. Stephanie remains on Our Story.

The first review leaned too heavily on a founder-led editorial structure. The revision changes the composition, hierarchy and interactions, not merely the colour palette: a split treatment-image hero, interactive care-category menu, full-width treatment feature, practical visit guidance, supporting home-care collection and journal. Text blocks have readable line lengths within wide compositions; the whole site is not confined to a narrow central column.

The original site uses Libre Baskerville. The rebuild retains that heading family, paired with locally served DM Sans for legible navigation and body copy. Fonts use the SIL Open Font License; licences are retained with the font files.

## Customer priorities

1. Know immediately what Solace offers and where it is.
2. Find a suitable treatment without reading an unstructured menu.
3. Understand any consultation or patch-test requirement before booking.
4. Explore a clear, custom appointment interface without mistaking sample availability for a live reservation.
5. Reach a real appointment system, phone or email with one clear action.
6. Explore full product galleries and an on-site basket/checkout demo without redirecting shoppers or implying real payment processing.

The homepage begins with treatments and location, then lets customers choose Skin treatments, Hair removal, Beauty essentials or Time to unwind. Founder imagery is exclusive to Our Story. Treatment filters and product search use local data; pages retain useful server-rendered content before JavaScript.

## Research applied

See COMPETITOR-RESEARCH.md for the full sources. Smooth by Adina informed the first-visit journey; Michelle Lett's menu informed prices/durations beside the choice; Divine informed clear introductory choices; Pucker & Wink informed practical visit details and service separation. No competitor artwork, testimonials or treatment copy was imported.

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

The existing site has live commerce. The requested review now includes a deliberately labelled on-site commerce demo: original product galleries, variant/quantity choice, integer-cent subtotals and an anonymous local basket. Shipping, tax treatment and stock are not invented. There are no personal-details or payment fields, no backend and no real order or confirmation. Checkout remains within the preview.

The custom booking preview includes all 61 published choices and their consultation rules. Dates/times are explicitly illustrative and do not connect to the live calendar. It asks for no personal or health details, does not save or send selections and cannot reserve an appointment. Clearly labelled Ovatu links remain available for real booking. Contact remains real email/phone. Newsletter signup is omitted until its storage/provider destination is approved.

The supplied social links are retained exactly, including the Facebook profile query ID. They are normal accessible outbound links, not third-party tracking/feed embeds.
