# Solace editorial and policy archive

## Public sources

- Collection: https://www.solaceaesthetics.co.nz/learn-with-solace-1?format=json
- Terms: https://www.solaceaesthetics.co.nz/terms-of-service-1
- Privacy: https://www.solaceaesthetics.co.nz/privacy-policy-1
- Source snapshots inspected: 11 October 2026 (UTC).

## Preservation rules

- `src/articles.json` contains all 12 published collection entries from the supplied public snapshot.
- Original article URL slugs, title wording, public image URLs and article body text are retained. HTML entities are decoded and layout-only whitespace is normalized. Original spelling, punctuation and published statements have not been editorially corrected or expanded.
- Dates are the source `publishOn` timestamps converted to the site’s `Pacific/Auckland` timezone and stored as ISO calendar dates.
- Paragraphs, headings and original line breaks are flattened into ordered plain-text paragraphs. Exact visible h1–h6 text is also recorded in each article’s `headings` array so rendering can identify source headings without heuristics. Empty layout blocks are omitted. No navigation, newsletter, footer, related-post or sidebar text is included.
- Excerpts are brief neutral descriptions added for index cards. They do not introduce treatment-efficacy claims.
- `src/policies.json` preserves the full substantive content of both public policies, including every numbered section, the introductory paragraph, contact address and revision date. The empty heading on the first section denotes the original introductory paragraph.
- Policy text is retained as published, including existing wording and typographical issues. This archive is a content migration, not a legal review or updated legal advice.
- Public source article and policy text was checked character-for-character after whitespace normalization against extracted source content; policy heading capitalization is the only additional normalization.
- All 12 journal images are copied locally under `/images/journal/` as WebP files, with original public source URLs and conversion provenance recorded in `CATALOGUE-SOURCES.md`.

## Article inventory

- 2026-01-29 — Understanding Rosacea: A Calm, Supportive Approach (36 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/understanding-rosacea-a-calm-supportive-approach
- 2026-01-25 — Understanding Pigmentation: What Your Skin Is Telling You (62 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/i5h2llqh0rj3b28pqvpeni9vwrkdyy
- 2026-01-23 — Dry or Dehydrated? Understanding What Your Skin Is Really Asking For (70 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/dry-or-dehydrated-understanding-what-your-skin-is-really-asking-for
- 2026-01-21 — Why Do I Have Acne in My 30s? (140 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/why-do-i-have-acne-in-my-30s
- 2026-01-20 — When Hormones Change, So Does Your Skin: A Gentle Guide to Menopausal Skin (140 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/when-hormones-change-so-does-your-skin-a-gentle-guide-to-menopausal-skin
- 2026-01-20 — All About SPF- Your Skin’s Daily Essential (86 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/all-about-spf-your-skins-daily-essential
- 2026-01-14 — Professional vs Generic Skincare: What’s the Real Difference? (57 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/professional-vs-generic-skincare-whats-the-real-difference
- 2025-11-27 — Why Woman Get Unwanted Facial Hair: Causes, Hormones & Permanent Solution (48 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/f8307fqfp44i673w7dp8zxxv42xpdb
- 2025-11-27 — Collagen & The Passage of Time: Understanding How Your Skin Changes and How to Support It (87 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/collagen-amp-the-passage-of-time-understanding-how-your-skin-changes-and-how-to-support-it
- 2025-11-17 — The Hidden Tension We Carry: Why Facial Massage Matters More Than You Think (30 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/the-hidden-tension-we-carry-why-facial-massage-matters-more-than-you-think
- 2025-11-17 — The Power of Touch: How Massage Relieves Tension & Restores Clarity (24 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/the-power-of-touch-how-massage-relieves-tension-amp-restores-clarity
- 2025-11-11 — Electrolysis vs IPL/Laser for unwanted facial hair: What’s the real difference? (20 text blocks): https://www.solaceaesthetics.co.nz/learn-with-solace-1/electrolysis-vs-ipllaser-for-unwanted-facial-hair-whats-the-real-difference

## Policy inventory

- Terms of Service: updated 17 October 2025; introduction plus 10 numbered sections.
- Privacy Policy: updated 17 October 2025; introduction plus 8 numbered sections.

## Integration notes

- Render stored content as escaped text rather than HTML.
- Link the article slugs under `/learn-with-solace-1/` and preserve `/terms-of-service-1` and `/privacy-policy-1`.
- The Terms of Service refer to the privacy policy; the renderer may link those words to `/privacy-policy-1`.
- Keep any new explanation of external booking/shop destinations separate from preserved legal text.
