# Solace: a wider composition with purpose

The verified f679ab58 homepage was inspected at 1920px before this pass, alongside the previously reviewed 1440px and mobile design. The middle sections stayed confined to 1160px even on wide screens, leaving broad outer margins and small photographs within the green feature.

The homepage now uses a wider, bounded editorial canvas at desktop while retaining readable text measures and the established curves:

- The hero's larger type and treatment photograph fill the broader composition. Its image reaches the right edge; paragraph copy remains limited to 390px.
- Treatment imagery spreads across the wider canvas. Two taller outside photographs anchor the gallery; shorter central images sit lower, giving the sequence a considered rhythm rather than four enlarged identical cards.
- The approach photograph reaches the left edge and occupies the extra desktop width. The text column stays at most 560px, with its paragraph capped at 510px. The original curved image and brass framing remain.
- Homecare reaches the right edge. A third existing, audited Brow Code packshot joins Vagheggi and DermaFix as a layered still life, reflecting the three brands already named in the section. No product claims, offers or purchasing actions were added.
- The header, invitation and footer align with the wider homepage. The ending remains a single invitation followed by useful contact/navigation details. Other page content widths remain unchanged.
- The stacked mobile design and two-column treatment gallery remain. An explicit space after the responsive line break fixes “unwind.Begin”.

No new external assets, content claims, client state or third-party dependencies were introduced. The touched TSX remains static server-rendered markup with meaningful image alt text and lazy loading below the hero. Existing keyboard/link behavior and demo boundaries remain.

Qualification covers the full source/data and browser suites, adding a 1920px homepage/treatment viewport and checks for the readable copy, gallery reach, approach image placement and sentence spacing. Final exact-commit CI, screenshots and protected Preview evidence are recorded in PR #1.

Local qualification passed: ESLint, strict TypeScript, all 18 source/data tests, static build and export checks (116 routes, 119 HTML files, 5,282 references, zero missing). All 23 Chromium journeys passed in 52.0s with no retries, failures or skips. Final full-page and section screenshots at 390/1440/1920px were visually inspected, including image crops, packshot placement, section reach, copy widths and the streamlined footer ending. Generated local evidence is in `qa/wider-home-{390,1440,1920}.png`; CI generates `qa/home-{390,1440,1920}.png` for the committed source.
