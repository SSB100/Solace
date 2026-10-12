# Solace: softer forms and a clearer close

## Design review

The unmodified `bc8ee9db039a877db4330b3b34b8e824074e7afa` source was rendered in Chromium at 1440 x 1000 and 390 x 844 before editing. The rigid effect came from a repeated series of rectangular photos, straight section edges and an address/phone/booking block immediately above the footer's same details.

This pass keeps the ivory, green and brass palette, serif scale, original photographs, five-section narrative and four treatment routes. Changes are selective:

- A sweeping lower-left corner on the hero photograph, echoed by its inset brass line.
- Larger curves on the outside treatment images; the two central images keep restrained edges.
- Opposing corner curves on the green approach section and its photograph/frame, with a little more breathing room around the section.
- A softer asymmetric homecare still-life surface, preserving the real product assets and existing arch.
- Modest 8px action corners and selective curves on the story/treatment heroes, first-visit guidance and contact appointment feature. Catalogue grids, menus and text links keep their quieter structure.
- The homepage ending is now one invitation flowing into the footer. Its two actions are Plan your visit and Ask us a question. Address, directions, phone, email, social links and useful navigation remain in the footer. The immediately repeated footer preview-booking link is hidden only on the homepage; live Ovatu access remains.

No images, catalogue content, prices, source URLs or booking/payment behaviour were changed. Staging noindex, Vercel protection and manual Preview deployment remain in place.

## Evidence

Before/after homepage captures: `qa/before-home-{1440,390}.png` and `qa/after-home-{1440,390}.png`. Final suite screenshots include `qa/home-{360,390,430,768,1440}.png`, `qa/facials-{360,390,430,768,1440}.png` and story/contact/shop captures at 390/1440. Screenshots are generated artifacts, not source assets.

Visually reviewed the full final homepage and the story, facial treatment and contact screens at desktop/mobile, including the consolidated close, photo crops, curved brass frames and retained footer links. No clipping or overflow was observed. Automated all-route image/overflow checks and complete booking/shop journeys are run separately; final exact-commit CI and Preview results belong in PR #1.

Local `npm run check`: ESLint, strict TypeScript, 18 source/data tests, static build and export verification passed (116 routes, 119 HTML files, 5,280 internal references, zero missing). The browser assertion for the existing address uses its original en dash; the initial new assertion used a hyphen and was corrected without changing the address.

Final local Chromium suite: 22 passed (45.2s), zero retries, failures or skips. This includes all-route image/overflow checks and the homepage ending/contact/navigation assertions.
