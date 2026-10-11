# Catalogue and local image sources

## Snapshot and scope

- Public collection source: https://www.solaceaesthetics.co.nz/shop?format=json
- Public editorial source: https://www.solaceaesthetics.co.nz/learn-with-solace-1?format=json
- Source snapshots inspected and images downloaded: 11 October 2026 (UTC).
- 73 products, 80 variants, and 10 source categories (the published “All” group plus 9 named categories).
- `src/products.json` stores product titles, complete plain-text source excerpts, category membership, verified variant prices, canonical public product URLs and local images.
- `src/product-categories.json` maps only source `id`, `displayName` → `name`, and `shortSlug` → `urlSlug`. No product was reassigned to an invented category.
- `calri-fine-masque-125ml` belongs only to the source All category. Its source spelling and membership are retained.
- Price values come from each variant’s NZD `priceMoney` (or sale price only where `onSale` is true), verified against the integer cent value. Parent product-level zero placeholders were not used.
- Display prices include the NZ$ currency marker and two decimals. Only genuinely differing variant prices use “From”; equal-price colour variants retain their exact price.
- No internal product IDs, variant IDs, SKUs, tracking configuration, inventory quantities, checkout, shipping or payment backend data is copied to the product data.
- Images use the exact public source asset URLs below. Local WebP copies use quality 82, a maximum 700 × 700 bounding box, original aspect ratio, no enlargement, and EXIF orientation correction.
- Downloads were bounded to five concurrent requests. Only transient HTTP responses (408, 425, 429, 500, 502, 503, 504) were eligible for up to three retries with exponential backoff. Existing verified image files were reused after an interrupted process.
- This catalogue archive preserves existing public material; it does not establish new licensing rights or provide an independent claims review.

## Existing claims requiring owner review

Product descriptions retain the source’s published marketing wording; they are not new claims or independently validated statements. The owner should review inherited treatment, age-related, growth, SPF, duration and efficacy claims before relying on their substantiation. No fresh efficacy or regulatory claims have been added. The following products are specifically flagged by existing wording (this is a review aid, not a complete substantiation audit):

- [Delay Facial Cleanser- 150ml](https://www.solaceaesthetics.co.nz/shop/p/delay-facial-cleanser-150ml)
- [Delay Day Cream Refill- 50ml](https://www.solaceaesthetics.co.nz/shop/p/delay-day-cream-refill-50ml)
- [Delay Night Cream Refill- 50ml](https://www.solaceaesthetics.co.nz/shop/p/delay-night-cream-refill-50ml)
- [Delay Retinol Face Serum- 30ml](https://www.solaceaesthetics.co.nz/shop/p/delay-retinol-face-serum-30ml)
- [Delay Eye and Lip Contour Cream- 30ml](https://www.solaceaesthetics.co.nz/shop/p/delay-eye-and-lip-contour-cream-30ml)
- [Delay Age Proof Ampoule 10x 1.5ml](https://www.solaceaesthetics.co.nz/shop/p/delay-age-proof-ampoule-10x-15ml)
- [Delay Infinity Face Mask- Single](https://www.solaceaesthetics.co.nz/shop/p/delay-infinity-face-mask-single)
- [Delay Day Cream- 50ml](https://www.solaceaesthetics.co.nz/shop/p/delay-day-cream-50ml)
- [Delay Night Cream- 50ml](https://www.solaceaesthetics.co.nz/shop/p/delay-night-cream-50ml)
- [Emozioni Plus Anti Pollution Drops SPF50+ 30ml](https://www.solaceaesthetics.co.nz/shop/p/emozioni-plus-anti-pollution-drops-spf50-30ml)
- [Rehydra 100H Face Cream- 50ml](https://www.solaceaesthetics.co.nz/shop/p/rehydra-100h-face-cream-50ml)
- [Rehydra Face Cream Refill- 50ml](https://www.solaceaesthetics.co.nz/shop/p/rehydra-face-cream-refill-50ml)
- [Moisturising Mineral Face Mask- 75ml](https://www.solaceaesthetics.co.nz/shop/p/moisturising-mineral-face-mask-75ml)
- [Corrective Eye Complex- 15ml](https://www.solaceaesthetics.co.nz/shop/p/corrective-eye-complex-15ml)
- [HydroGel Collagen Masque Single](https://www.solaceaesthetics.co.nz/shop/p/hydrogel-collagen-masque-single)
- [HydraSooth SOS- 125ml](https://www.solaceaesthetics.co.nz/shop/p/hydrasooth-sos-125ml)
- [Collagen Film Masque Single](https://www.solaceaesthetics.co.nz/shop/p/collagen-film-masque-single)
- [Calri-Fine Masque- 125ml](https://www.solaceaesthetics.co.nz/shop/p/calri-fine-masque-125ml)
- [Dermal Repair- 57ml](https://www.solaceaesthetics.co.nz/shop/p/dermal-repair-57ml)
- [ACC Vitamin C Gel- 57ml](https://www.solaceaesthetics.co.nz/shop/p/acc-vitamin-c-gel-57ml)
- [ACC Tranexamic Gel- 57ml](https://www.solaceaesthetics.co.nz/shop/p/acc-tranexamic-gel-57ml)
- [ACC Retinol + 57ml](https://www.solaceaesthetics.co.nz/shop/p/acc-retinol-57ml)
- [ACC Hyaluronic Gel- 57ml](https://www.solaceaesthetics.co.nz/shop/p/acc-hyaluronic-gel-57ml)
- [ACC Copper Peptide- 57ml](https://www.solaceaesthetics.co.nz/shop/p/acc-copper-peptide-57ml)
- [DermaLift + 157ml](https://www.solaceaesthetics.co.nz/shop/p/dermalift-157ml)
- [Resveratrol + Corrective- 57ml](https://www.solaceaesthetics.co.nz/shop/p/resveratrol-corrective-57ml)
- [Hyalu7 Boost- 15ml](https://www.solaceaesthetics.co.nz/shop/p/hyalu7-boost-15ml)
- [Ceramide Eye Complex- 15ml](https://www.solaceaesthetics.co.nz/shop/p/ceramide-eye-complex-15ml)
- [Tinted SPF40- 50ml](https://www.solaceaesthetics.co.nz/shop/p/tinted-spf40-50ml)
- [DermaShield SPF50- 125ml](https://www.solaceaesthetics.co.nz/shop/p/dermashield-spf50-125ml)
- [Vitaplex-C Cream- 57ml](https://www.solaceaesthetics.co.nz/shop/p/vitaplex-c-cream-57ml)
- [Vitamin B Cream- 57ml](https://www.solaceaesthetics.co.nz/shop/p/vitamin-b-cream-57ml)
- [Regenerate Rx EGF- 57ml](https://www.solaceaesthetics.co.nz/shop/p/regenerate-rx-egf-57ml)
- [PowerDerm- 57ml](https://www.solaceaesthetics.co.nz/shop/p/powerderm-57ml)
- [DeCeLeRate- Peptides - 57ml](https://www.solaceaesthetics.co.nz/shop/p/decelerate-peptides-57ml)
- [Bio-Hydrating Cream- 57ml](https://www.solaceaesthetics.co.nz/shop/p/bio-hydrating-cream-57ml)
- [Bio-Effective Cream- 57ml](https://www.solaceaesthetics.co.nz/shop/p/bio-effective-cream-57ml)
- [Argan Oil 100% Pure- 50ml](https://www.solaceaesthetics.co.nz/shop/p/argan-oil-100-pure-50ml)
- [Brightening Toner- 150ml](https://www.solaceaesthetics.co.nz/shop/p/brightening-toner-150ml)
- [Hydra-Silk Cleanser- 200ml](https://www.solaceaesthetics.co.nz/shop/p/hydra-silk-cleanser-200ml)
- [Brightening Cleanser- 200ml](https://www.solaceaesthetics.co.nz/shop/p/brightening-cleanser-200ml)
- [Sterex Apres Cosmetic Cream – 35ml](https://www.solaceaesthetics.co.nz/shop/p/sterex-apres-cosmetic-cream-35ml)
- [Brow Code Multi-Peptide Growth Serum](https://www.solaceaesthetics.co.nz/shop/p/multi-peptide-growth-serum)
- [Brow Code Gold Nourishing Growth Oil](https://www.solaceaesthetics.co.nz/shop/p/brow-code-gold-nourishing-growth-oil)

## Exact category sources

- All: https://www.solaceaesthetics.co.nz/shop
- Exfoliant: https://www.solaceaesthetics.co.nz/shop/exfoliant
- Eye Care: https://www.solaceaesthetics.co.nz/shop/eye-care
- Sun Protection: https://www.solaceaesthetics.co.nz/shop/sun-protection
- Moisturiser: https://www.solaceaesthetics.co.nz/shop/moisturiser
- Skin Correctives: https://www.solaceaesthetics.co.nz/shop/skin-correctives
- Cleanser & Toner: https://www.solaceaesthetics.co.nz/shop/cleanser-toner
- Sterex: https://www.solaceaesthetics.co.nz/shop/sterex
- Makeup: https://www.solaceaesthetics.co.nz/shop/makeup
- Lash & Brow Care: https://www.solaceaesthetics.co.nz/shop/lash-brow-care

## Product source and image inventory

### Delay Facial Cleanser- 150ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-facial-cleanser-150ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/31a5df81-1e1d-4f6d-9ccb-f49cc0995f34/Screenshot+2026-01-07+094213.png
- Local image: `/images/products/delay-facial-cleanser-150ml.webp`
- Verified display price: NZ$70.00; 1 variant(s).

### Delay Day Cream Refill- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-day-cream-refill-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/a5231329-6039-452a-a4ba-0fe30243b81f/Screenshot+2026-01-07+094112.png
- Local image: `/images/products/delay-day-cream-refill-50ml.webp`
- Verified display price: NZ$92.00; 1 variant(s).

### Delay Night Cream Refill- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-night-cream-refill-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/c54ee061-125a-4b8b-85bb-3a6ab12b87f3/Screenshot+2026-01-07+093943.png
- Local image: `/images/products/delay-night-cream-refill-50ml.webp`
- Verified display price: NZ$92.00; 1 variant(s).

### Delay Retinol Face Serum- 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-retinol-face-serum-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/e1f6d3c7-578e-4035-a472-3170311d2bcd/Screenshot+2026-01-07+093739.png
- Local image: `/images/products/delay-retinol-face-serum-30ml.webp`
- Verified display price: NZ$138.00; 1 variant(s).

### Delay Eye and Lip Contour Cream- 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-eye-and-lip-contour-cream-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/d4790343-a310-4203-ae73-07ca842c8d40/Screenshot+2026-01-07+093609.png
- Local image: `/images/products/delay-eye-and-lip-contour-cream-30ml.webp`
- Verified display price: NZ$138.00; 1 variant(s).

### Delay Age Proof Ampoule 10x 1.5ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-age-proof-ampoule-10x-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/9ab7ed59-9b76-4acc-9ff2-a3982c6e41d0/Screenshot+2026-01-07+093430.png
- Local image: `/images/products/delay-age-proof-ampoule-10x-15ml.webp`
- Verified display price: NZ$114.00; 1 variant(s).

### Delay Infinity Face Mask- Single
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-infinity-face-mask-single
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/35ff66e2-2554-42c3-b08f-7c3a8ed0bb89/Screenshot+2026-01-07+093218.png
- Local image: `/images/products/delay-infinity-face-mask-single.webp`
- Verified display price: NZ$23.00; 1 variant(s).

### Delay Day Cream- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-day-cream-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/4cd47572-25cd-46bd-8357-28bb1ae4cc6f/Screenshot+2026-01-07+093024.png
- Local image: `/images/products/delay-day-cream-50ml.webp`
- Verified display price: NZ$114.00; 1 variant(s).

### Delay Night Cream- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/delay-night-cream-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/9d79de6d-bc36-414c-9fc3-f1fbb5fabfd5/Screenshot+2026-01-07+092853.png
- Local image: `/images/products/delay-night-cream-50ml.webp`
- Verified display price: NZ$114.00; 1 variant(s).

### Balance Spongy Mask- 150ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/balance-spongy-mask-150ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/50af7fbb-9083-437a-9fcb-0e7efb54b8dc/Screenshot+2026-01-07+092300.png
- Local image: `/images/products/balance-spongy-mask-150ml.webp`
- Verified display price: NZ$81.00; 1 variant(s).

### Balance Face Cream- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/balance-face-cream-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/c03d44d0-d265-4cbe-8934-e74f8bac72fe/Screenshot+2026-01-07+092114.png
- Local image: `/images/products/balance-face-cream-50ml.webp`
- Verified display price: NZ$92.00; 1 variant(s).

### SOS Imperfections Kit 40 Patches + 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/sos-imperfections-kit-40-patches-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/404ec5df-1bac-4881-88a2-96b79eb022ff/Screenshot+2026-01-07+091938.png
- Local image: `/images/products/sos-imperfections-kit-40-patches-15ml.webp`
- Verified display price: NZ$92.00; 1 variant(s).

### Balance Serum- 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/balance-serum-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/cea0b4b1-34a6-4a32-bb4b-cb827e010096/Screenshot+2026-01-07+091803.png
- Local image: `/images/products/balance-serum-30ml.webp`
- Verified display price: NZ$104.00; 1 variant(s).

### Purifying Cleanser- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/purifying-cleanser-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/b1c83772-6b9f-4d76-9135-7012fe3ee11a/Screenshot+2026-01-07+090545.png
- Local image: `/images/products/purifying-cleanser-200ml.webp`
- Verified display price: NZ$81.00; 1 variant(s).

### Emozioni Plus Soothing Cream- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/emozioni-plus-soothing-cream-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/45c3a116-4889-4ac9-84bd-b01baee14cb8/Screenshot+2026-01-06+180653.png
- Local image: `/images/products/emozioni-plus-soothing-cream-50ml.webp`
- Verified display price: NZ$127.00; 1 variant(s).

### Emozioni Plus Anti Pollution Drops SPF50+ 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/emozioni-plus-anti-pollution-drops-spf50-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/e097d684-ed1c-4e76-9bee-3ede5572383a/Screenshot+2026-01-06+180400.png
- Local image: `/images/products/emozioni-plus-anti-pollution-drops-spf50-30ml.webp`
- Verified display price: NZ$104.00; 1 variant(s).

### Emozioni Plus Cooling Serum- 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/emozioni-plus-cooling-serum-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/0b6ddd28-a7fb-4b03-91b3-368eddef3871/Screenshot+2026-01-06+180137.png
- Local image: `/images/products/emozioni-plus-cooling-serum-30ml.webp`
- Verified display price: NZ$127.00; 1 variant(s).

### Emozioni Plus Cleansing Cream- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/emozioni-plus-cleansing-cream-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/677f600f-8716-4836-9421-bd5840a57e02/Screenshot+2026-01-06+175754.png
- Local image: `/images/products/emozioni-plus-cleansing-cream-200ml.webp`
- Verified display price: NZ$82.00; 1 variant(s).

### Rehydra Cleansing Mousse- 150ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-cleansing-mousse-150ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/ea3d1835-c605-403f-9232-cccebf29741e/Screenshot+2026-01-06+174419.png
- Local image: `/images/products/rehydra-cleansing-mousse-150ml.webp`
- Verified display price: NZ$52.00; 1 variant(s).

### Rehydra Cleansing Milk- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-cleansing-milk-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/59b1001d-53d6-4218-8901-7885a5f3bfc7/Screenshot+2026-01-06+174023.png
- Local image: `/images/products/rehydra-cleansing-milk-200ml.webp`
- Verified display price: NZ$64.00; 1 variant(s).

### Hydrating Toner- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hydrating-toner-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/e70bb1ae-a800-4b98-b781-c5c843bea89d/Screenshot+2026-01-06+173849.png
- Local image: `/images/products/hydrating-toner-200ml.webp`
- Verified display price: NZ$64.00; 1 variant(s).

### Rehydra 100H Face Cream- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-100h-face-cream-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/37c2bc29-e1df-4cb4-afab-a51f589f7fac/Screenshot+2026-01-06+172943.png
- Local image: `/images/products/rehydra-100h-face-cream-50ml.webp`
- Verified display price: NZ$91.00; 1 variant(s).

### Rehydra Face Cream Refill- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-face-cream-refill-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/f27f4327-00aa-4a21-88d5-26fe5319f30e/Screenshot+2026-01-06+182933.png
- Local image: `/images/products/rehydra-face-cream-refill-50ml.webp`
- Verified display price: NZ$75.00; 1 variant(s).

### Hydra-Nourishing Face Cream- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hydra-nourishing-face-cream-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/9f0850f5-4f25-45c8-ad14-d131e723620b/Screenshot+2026-01-06+172943.png
- Local image: `/images/products/hydra-nourishing-face-cream-50ml.webp`
- Verified display price: NZ$114.00; 1 variant(s).

### Hydra-Nourishing Cream Refill- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hydra-nourishing-cream-refill-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/43f3676c-37d3-4f9c-97c2-6cc275803230/Screenshot+2026-01-06+172646.png
- Local image: `/images/products/hydra-nourishing-cream-refill-50ml.webp`
- Verified display price: NZ$87.00; 1 variant(s).

### Rehydra Eye Contour- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-eye-contour-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/a71d12b8-bebd-4e09-afbd-e8e69b3da619/Screenshot+2026-01-06+172314.png
- Local image: `/images/products/rehydra-eye-contour-15ml.webp`
- Verified display price: NZ$64.00; 1 variant(s).

### Rehydra Concentrated Serum- 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-concentrated-serum-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/420c305a-d5ad-4b8a-9155-a743774e666f/Screenshot+2026-01-06+171934.png
- Local image: `/images/products/rehydra-concentrated-serum-30ml.webp`
- Verified display price: NZ$103.00; 1 variant(s).

### Moisturising Mineral Face Mask- 75ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/moisturising-mineral-face-mask-75ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/8b4e43b6-bbf0-4dd8-bd5e-8444a631ca56/Screenshot+2026-01-06+171636.png
- Local image: `/images/products/moisturising-mineral-face-mask-75ml.webp`
- Verified display price: NZ$57.00; 1 variant(s).

### Rehydra Face Scrub- 75ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/rehydra-face-scrub-75ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/c179fd94-e922-452f-a5d0-51b1d892f0e6/Screenshot+2026-01-06+171222.png
- Local image: `/images/products/rehydra-face-scrub-75ml.webp`
- Verified display price: NZ$52.00; 1 variant(s).

### Corrective Eye Complex- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/corrective-eye-complex-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/5397586c-5317-490f-867d-7f6d9126b12d/Screenshot+2026-01-06+170315.png
- Local image: `/images/products/corrective-eye-complex-15ml.webp`
- Verified display price: NZ$129.00; 1 variant(s).

### Vitamin Therapy Masque- 125ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/vitamin-therapy-masque-125ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1a017dbe-9a3b-49e1-86ee-ae5bdcb7720d/Screenshot+2026-01-06+163809.png
- Local image: `/images/products/vitamin-therapy-masque-125ml.webp`
- Verified display price: NZ$139.00; 1 variant(s).

### Pumpkin Peptide Masque- 125ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/pumpkin-peptide-masque-125ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/e5decb49-8c9f-4e0f-85e0-db92372cadab/Screenshot+2026-01-06+163758.png
- Local image: `/images/products/pumpkin-peptide-masque-125ml.webp`
- Verified display price: NZ$129.00; 1 variant(s).

### HydroGel Collagen Masque Single
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hydrogel-collagen-masque-single
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/d7e68179-c759-4de0-8b22-7b507f619fa6/Screenshot+2026-01-06+163748.png
- Local image: `/images/products/hydrogel-collagen-masque-single.webp`
- Verified display price: NZ$26.50; 1 variant(s).

### HydraSooth SOS- 125ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hydrasooth-sos-125ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/100bab28-7ff2-42cf-8d42-2825e6607cc1/Screenshot+2026-01-06+163742.png
- Local image: `/images/products/hydrasooth-sos-125ml.webp`
- Verified display price: NZ$125.00; 1 variant(s).

### Collagen Film Masque Single
- Public product: https://www.solaceaesthetics.co.nz/shop/p/collagen-film-masque-single
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/73bc8f0b-d5aa-4b39-9508-aff8ada0bed7/Screenshot+2026-01-06+163733.png
- Local image: `/images/products/collagen-film-masque-single.webp`
- Verified display price: NZ$26.50; 1 variant(s).

### Calri-Fine Masque- 125ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/calri-fine-masque-125ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/75238a98-4bdc-48a3-b290-a6bf1b8ce7af/Screenshot+2026-01-06+163725.png
- Local image: `/images/products/calri-fine-masque-125ml.webp`
- Verified display price: NZ$124.00; 1 variant(s).

### Dermal Repair- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/dermal-repair-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/49fab64b-28de-4531-9320-b25b59070991/Screenshot+2026-01-06+163113.png
- Local image: `/images/products/dermal-repair-57ml.webp`
- Verified display price: NZ$136.00; 1 variant(s).

### ACC Vitamin C Gel- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/acc-vitamin-c-gel-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/99acf12d-c382-49d2-9129-838ab61e992e/Screenshot+2026-01-06+162848.png
- Local image: `/images/products/acc-vitamin-c-gel-57ml.webp`
- Verified display price: NZ$145.00; 1 variant(s).

### ACC Tranexamic Gel- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/acc-tranexamic-gel-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/4e13a6be-e91a-48c3-95ce-794cfd0fbfcd/Screenshot+2026-01-06+162656.png
- Local image: `/images/products/acc-tranexamic-gel-57ml.webp`
- Verified display price: NZ$149.00; 1 variant(s).

### ACC Retinol + 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/acc-retinol-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/ab2198a5-e9ea-4ffb-9c74-71c30ea70de1/Screenshot+2026-01-06+162511.png
- Local image: `/images/products/acc-retinol-57ml.webp`
- Verified display price: NZ$176.00; 1 variant(s).

### ACC Hyaluronic Gel- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/acc-hyaluronic-gel-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/3e939631-d32a-46e5-b4d1-2f26ba160bc2/Screenshot+2026-01-06+162329.png
- Local image: `/images/products/acc-hyaluronic-gel-57ml.webp`
- Verified display price: NZ$145.00; 1 variant(s).

### ACC Copper Peptide- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/acc-copper-peptide-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/597daff4-6cb0-4a8d-b1c2-56c5737fa3ec/Screenshot+2026-01-06+162103.png
- Local image: `/images/products/acc-copper-peptide-57ml.webp`
- Verified display price: NZ$159.00; 1 variant(s).

### Vitamin C Serum- 30ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/vitamin-c-serum-30ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/6a5b5901-916e-4808-b264-d7a7a3b57739/Screenshot+2026-01-06+161627.png
- Local image: `/images/products/vitamin-c-serum-30ml.webp`
- Verified display price: NZ$130.00; 1 variant(s).

### DermaLift + 157ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/dermalift-157ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/95b232ea-9fe5-4c74-b45d-833c4a9e4b2c/Screenshot+2026-01-06+161437.png
- Local image: `/images/products/dermalift-157ml.webp`
- Verified display price: NZ$169.00; 1 variant(s).

### Resveratrol + Corrective- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/resveratrol-corrective-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/8ea5cf1a-1d35-4f5e-87ef-49e88facd083/Screenshot+2026-01-06+161121.png
- Local image: `/images/products/resveratrol-corrective-57ml.webp`
- Verified display price: NZ$175.00; 1 variant(s).

### LipFIX- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/lipfix-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/70de06df-eb1e-44c1-849c-0114d6f4056c/Screenshot+2026-01-06+160818.png
- Local image: `/images/products/lipfix-15ml.webp`
- Verified display price: NZ$59.00; 1 variant(s).

### Hyalu7 Boost- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hyalu7-boost-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/87dbf95d-9a5b-4f19-9f39-2e6eacf91592/Screenshot+2026-01-06+160459.png
- Local image: `/images/products/hyalu7-boost-15ml.webp`
- Verified display price: NZ$96.00; 1 variant(s).

### CircleLight- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/circlelight-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/5e3342ed-d166-42a5-96cc-d5d5fe00e15f/Screenshot+2026-01-06+160219.png
- Local image: `/images/products/circlelight-15ml.webp`
- Verified display price: NZ$119.00; 1 variant(s).

### Ceramide Eye Complex- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/ceramide-eye-complex-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/ffd4f31a-db04-4c9e-a6f0-031a8c4b27cc/Screenshot+2026-01-06+160009.png
- Local image: `/images/products/ceramide-eye-complex-15ml.webp`
- Verified display price: NZ$112.00; 1 variant(s).

### B3 Boost- 15ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/b3-boost-15ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/21d2c139-2d86-41a0-ade4-13d59984fb76/Screenshot+2026-01-06+155404.png
- Local image: `/images/products/b3-boost-15ml.webp`
- Verified display price: NZ$98.00; 1 variant(s).

### Tinted SPF40- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/tinted-spf40-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/5cf59302-38ac-466e-a68e-3cf95cf128ae/Screenshot+2026-01-06+155014.png
- Local image: `/images/products/tinted-spf40-50ml.webp`
- Verified display price: NZ$60.00; 1 variant(s).

### DermaShield SPF50- 125ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/dermashield-spf50-125ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/87d28bd1-6018-4617-9b6f-819bbf80cb76/Screenshot+2026-01-06+154750.png
- Local image: `/images/products/dermashield-spf50-125ml.webp`
- Verified display price: NZ$96.00; 1 variant(s).

### Vitaplex-C Cream- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/vitaplex-c-cream-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/911201ed-f150-4d39-bcc3-28999f5515cd/Screenshot+2026-01-06+154301.png
- Local image: `/images/products/vitaplex-c-cream-57ml.webp`
- Verified display price: NZ$129.00; 1 variant(s).

### Vitamin B Cream- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/vitamin-b-cream-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/9d721e18-f1c0-4bef-8520-04a1ce5914a3/Screenshot+2026-01-06+154119.png
- Local image: `/images/products/vitamin-b-cream-57ml.webp`
- Verified display price: NZ$129.00; 1 variant(s).

### Skin ResQ- 125ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/skin-resq-125ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/83dac2f7-ce0a-4a5e-b91f-9c08bb499c52/Screenshot+2026-01-06+153918.png
- Local image: `/images/products/skin-resq-125ml.webp`
- Verified display price: NZ$124.00; 1 variant(s).

### Regenerate Rx EGF- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/regenerate-rx-egf-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/55c44248-0779-4579-a584-95044e6c98b5/Screenshot+2026-01-06+153646.png
- Local image: `/images/products/regenerate-rx-egf-57ml.webp`
- Verified display price: NZ$165.00; 1 variant(s).

### PowerDerm- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/powerderm-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/72d641b0-6144-4186-a810-d1e2869928f8/Screenshot+2026-01-06+153436.png
- Local image: `/images/products/powerderm-57ml.webp`
- Verified display price: NZ$139.00; 1 variant(s).

### DeCeLeRate- Peptides - 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/decelerate-peptides-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/7ac950e1-5ba7-4963-9090-759894c27e51/Screenshot+2026-01-06+153134.png
- Local image: `/images/products/decelerate-peptides-57ml.webp`
- Verified display price: NZ$179.00; 1 variant(s).

### Bio-Hydrating Cream- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/bio-hydrating-cream-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/369e2031-9963-4333-b7dd-ab7da6931925/Screenshot+2026-01-06+152910.png
- Local image: `/images/products/bio-hydrating-cream-57ml.webp`
- Verified display price: NZ$129.00; 1 variant(s).

### Bio-Effective Cream- 57ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/bio-effective-cream-57ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/6b52c0e6-8912-41d6-8ddb-12be8227746c/Screenshot+2026-01-06+152743.png
- Local image: `/images/products/bio-effective-cream-57ml.webp`
- Verified display price: NZ$139.00; 1 variant(s).

### Argan Oil 100% Pure- 50ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/argan-oil-100-pure-50ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/ec2e6e24-b4eb-4e3e-82ae-d6e75854354a/Screenshot+2026-01-06+152510.png
- Local image: `/images/products/argan-oil-100-pure-50ml.webp`
- Verified display price: NZ$125.00; 1 variant(s).

### Revitalising Toner- 150ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/revitalising-toner-150ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/15f6a1c3-5f61-43d3-b499-9c07f88c8263/Screenshot+2026-01-06+151850.png
- Local image: `/images/products/revitalising-toner-150ml.webp`
- Verified display price: NZ$78.00; 1 variant(s).

### Brightening Toner- 150ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/brightening-toner-150ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/d96039e5-3651-4e04-a87a-436579f31385/Screenshot+2026-01-06+151842.png
- Local image: `/images/products/brightening-toner-150ml.webp`
- Verified display price: NZ$78.00; 1 variant(s).

### Hydra-Silk Cleanser- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/hydra-silk-cleanser-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/91488f0f-8f6b-43a8-814e-62f843226c57/Screenshot+2026-01-06+150647.png
- Local image: `/images/products/hydra-silk-cleanser-200ml.webp`
- Verified display price: NZ$82.00; 1 variant(s).

### Brightening Cleanser- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/brightening-cleanser-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/a744e551-a3e6-428c-ac7e-f27387890cd4/Screenshot+2026-01-06+150635.png
- Local image: `/images/products/brightening-cleanser-200ml.webp`
- Verified display price: NZ$82.00; 1 variant(s).

### Active Cleansing Gel- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/active-cleansing-gel
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/29e3699b-b644-47b1-895e-3dab2aac2e5f/Screenshot+2026-01-06+150613.png
- Local image: `/images/products/active-cleansing-gel.webp`
- Verified display price: NZ$80.00; 1 variant(s).

### Gentle Cleansing Gel- 200ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/gentle-cleansing-gel-200ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/30b18171-7015-4ac8-af77-a7ab642d10f1/200ml-Gentle-Cleansing-Gel-NEW-BOTTLE-CO-1-1536x1536.png
- Local image: `/images/products/gentle-cleansing-gel-200ml.webp`
- Verified display price: NZ$80.00; 1 variant(s).

### Calming Microfoam Cleanser- 100ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/calming-microfoam-cleanser-100ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/699ca49d-209f-40be-8d04-c5e85153fd8a/100ml-Calming-MicroFoam-Cleansing-700x700px.jpg
- Local image: `/images/products/calming-microfoam-cleanser-100ml.webp`
- Verified display price: NZ$75.00; 1 variant(s).

### Sterex Apres Cosmetic Cream – 35ml
- Public product: https://www.solaceaesthetics.co.nz/shop/p/sterex-apres-cosmetic-cream-35ml
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/d95400b4-3ae4-476c-bac0-25241c674ce5/Apres-Care-35ml-tube-e1738625757541.png
- Local image: `/images/products/sterex-apres-cosmetic-cream-35ml.webp`
- Verified display price: NZ$14.50; 1 variant(s).

### Brow Code Imitations Micro Pencil
- Public product: https://www.solaceaesthetics.co.nz/shop/p/brow-code-imitations-micro-pencil
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/6efc50a7-fbf8-464b-9f6a-f9cc7138ad6f/Brunette.webp
- Local image: `/images/products/brow-code-imitations-micro-pencil.webp`
- Verified display price: NZ$59.90; 6 variant(s).

### Vani- T Sculpt & Define Brow Pencil
- Public product: https://www.solaceaesthetics.co.nz/shop/p/vani-t-sculpt-define-brow-pencil
- Public image: https://static1.squarespace.com/static/68ed6f1c07d39e2929f76bc4/68ed6fb99d55085e6c2116ad/68f1cb527299ba1a416573a3/1788095914638/
- Local image: `/images/products/vani-t-sculpt-define-brow-pencil.webp`
- Verified display price: NZ$42.90; 2 variant(s).

### Brow Code Multi-Peptide Growth Serum
- Public product: https://www.solaceaesthetics.co.nz/shop/p/multi-peptide-growth-serum
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/9ef48f92-893f-4c4d-9ff5-8a4a50b59746/brow-code_multi-peptide-hair-growth-serum_750x.webp
- Local image: `/images/products/multi-peptide-growth-serum.webp`
- Verified display price: NZ$110.00; 1 variant(s).

### Brow Code Gold Nourishing Growth Oil
- Public product: https://www.solaceaesthetics.co.nz/shop/p/brow-code-gold-nourishing-growth-oil
- Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/287f3858-1b35-491c-8fe9-35037a93b732/Brow+oil+5ml.webp
- Local image: `/images/products/brow-code-gold-nourishing-growth-oil.webp`
- Verified display price: From NZ$24.00; 2 variant(s).

## Article image inventory

- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/understanding-rosacea-a-calm-supportive-approach
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1769644573901-6XI56PUPMMLWSCOCFBKW/unsplash-image-NXEi84bhtq0.jpg
  - Local image: `/images/journal/understanding-rosacea-a-calm-supportive-approach.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/i5h2llqh0rj3b28pqvpeni9vwrkdyy
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1768943842561-4ZOQCRRL04WF4HRJSDA6/unsplash-image-q0Ed7HH0_Mw.jpg
  - Local image: `/images/journal/i5h2llqh0rj3b28pqvpeni9vwrkdyy.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/dry-or-dehydrated-understanding-what-your-skin-is-really-asking-for
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1768940862951-F54TRT04LUGW80OWCZUX/unsplash-image-8EFA86nI6yg.jpg
  - Local image: `/images/journal/dry-or-dehydrated-understanding-what-your-skin-is-really-asking-for.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/why-do-i-have-acne-in-my-30s
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1768880827578-6QGANH6IVGWM27R5TK6U/unsplash-image-SfkPaoE_i34.jpg
  - Local image: `/images/journal/why-do-i-have-acne-in-my-30s.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/when-hormones-change-so-does-your-skin-a-gentle-guide-to-menopausal-skin
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1768875404737-UVXLHPS1DYGSAVJJFBQB/unsplash-image-j87_-F7RZ6M.jpg
  - Local image: `/images/journal/when-hormones-change-so-does-your-skin-a-gentle-guide-to-menopausal-skin.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/all-about-spf-your-skins-daily-essential
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1768856821972-XD0UX8O0T4UW739IXYQK/unsplash-image-absT1BNRDAI.jpg
  - Local image: `/images/journal/all-about-spf-your-skins-daily-essential.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/professional-vs-generic-skincare-whats-the-real-difference
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1768337822462-2Y460T2TZALUEELZXLUA/unsplash-image-YUwvNIhlHcc.jpg
  - Local image: `/images/journal/professional-vs-generic-skincare-whats-the-real-difference.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/f8307fqfp44i673w7dp8zxxv42xpdb
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1764208703867-08PG08PZJK3OYZAOJ2JY/M1700244-Hirsutism-SPL-20181217104340418.jpg
  - Local image: `/images/journal/f8307fqfp44i673w7dp8zxxv42xpdb.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/collagen-amp-the-passage-of-time-understanding-how-your-skin-changes-and-how-to-support-it
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1764200305126-ZXLA2BH4AKHYCYTTGTA8/collagen+helix.jpg
  - Local image: `/images/journal/collagen-amp-the-passage-of-time-understanding-how-your-skin-changes-and-how-to-support-it.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/the-hidden-tension-we-carry-why-facial-massage-matters-more-than-you-think
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1763332309177-BI8L5RATHO0JQYUL24XY/unsplash-image-rWwuf8yKw4Y.jpg
  - Local image: `/images/journal/the-hidden-tension-we-carry-why-facial-massage-matters-more-than-you-think.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/the-power-of-touch-how-massage-relieves-tension-amp-restores-clarity
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1763329931462-LMQMZGXKM3MCEIEG545E/unsplash-image-W7AyAs7azHc.jpg
  - Local image: `/images/journal/the-power-of-touch-how-massage-relieves-tension-amp-restores-clarity.webp`
- Article: https://www.solaceaesthetics.co.nz/learn-with-solace-1/electrolysis-vs-ipllaser-for-unwanted-facial-hair-whats-the-real-difference
  - Public image: https://images.squarespace-cdn.com/content/v1/68ed6f1c07d39e2929f76bc4/1762820594563-I6TO3AQ24S8K0G5A3BDJ/360_F_269833493_EriYYjzWZkTHg13Zzs21qjHyRrt0DqnH.jpg
  - Local image: `/images/journal/electrolysis-vs-ipllaser-for-unwanted-facial-hair-whats-the-real-difference.webp`

## Validation outcome

- Product descriptions were compared to all source excerpts; every non-whitespace character is preserved.
- All 80 NZD variant values match their source cent amounts.
- All 85 local images (73 product and 12 journal) are present, decode successfully as WebP, and have a maximum dimension of 700 pixels.
- All image downloads completed without HTTP failures. Total local image payload: 791,162 bytes.
- Every product and article image path resolves to its verified local file.
- Existing-claim review flags: 44 / 73 products.
