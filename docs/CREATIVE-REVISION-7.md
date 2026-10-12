# Solace: consistent shared header and footer

The 3527e72 source was rendered on home and Our Story at 390, 1440 and 1920px before editing. Both routes already used the same Header and Footer components, but homepage-only CSS changed their appearance:

- Header horizontal padding was 72px versus 100px at 1440, and 96px versus 340px at 1920.
- Footer horizontal padding was 72px versus 140px at 1440, and 120px versus 380px at 1920.
- Homepage footer top padding/border differed on desktop and mobile, and its Plan your visit navigation link was hidden.

The inner-page chrome is now the reference for every route. All five homepage-specific header/footer rules were removed; sizing, alignment, spacing, border and link visibility come exclusively from the shared stylesheet and shared components. No duplicated chrome or route-specific replacement was introduced.

The approved wider homepage canvas, image-led arrangements, selective curves, typography, three-brand still life and mobile sentence fix remain unchanged. The adjacent homepage invitation still contains no repeated address or phone block; necessary contact details remain in the footer. Restoring the footer's normal booking navigation makes its contents consistent across routes.

A browser regression walks actual desktop/mobile navigation from Our Story to home, treatments, shop, contact, story, booking and back home. At 390/1440/1920px it compares computed shared styling, relative element geometry and complete footer content against the inner-page reference, capturing header/footer screenshots on each route. Existing wide homepage, complete catalogue and booking/shop demo checks also remain.

Exact-commit CI, final screenshots and protected Preview evidence are recorded in PR #1. No production, domain, payment or booking activation changes are included.

Local qualification passed: ESLint, strict TypeScript, all 18 source/data tests, static build and export verification (116 routes, 119 HTML files, 5,282 internal references; zero missing). All 26 Chromium journeys passed in 48.3s with no retries, failures or skips. Final shared-chrome comparisons and the complete wider homepage were visually reviewed on desktop and mobile. The active-page navigation underline is the intended route-dependent indicator; chrome geometry and content remain fixed.
