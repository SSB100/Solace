import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
const json=p=>JSON.parse(readFileSync(p,'utf8'));
const services=json('src/services.json'),articles=json('src/articles.json'),products=json('src/products.json'),categories=json('src/product-categories.json'),policies=json('src/policies.json');
test('all ten source treatment categories are retained',()=>{assert.equal(services.length,10);assert.equal(new Set(services.map(s=>s.slug)).size,10)});
test('all twelve original journal articles retain their URLs',()=>{assert.equal(articles.length,12);assert.equal(new Set(articles.map(a=>a.slug)).size,12);for(const a of articles){assert.ok(a.paragraphs.length>5);assert.match(a.date,/^20\d\d-\d\d-\d\d$/)}});
test('all 73 products and 80 variants are preserved',()=>{assert.equal(products.length,73);assert.equal(products.flatMap(p=>p.variants).length,80);for(const p of products){assert.match(p.sourceUrl,/^https:\/\/www\.solaceaesthetics\.co\.nz\/shop\/p\//);assert.ok(p.price.includes('NZ$'));assert.ok(p.variants.length)}});
test('source categories are not invented',()=>{assert.equal(categories.length,10);assert.ok(categories.some(c=>c.urlSlug==='cleanser-toner'))});
test('required electrolysis consultation retained',()=>assert.match(services.find(s=>s.slug==='electrolysis').consultation,/24 hours/));
test('required alkaline patch test retained',()=>assert.match(services.find(s=>s.slug==='alkaline-treatments').consultation,/patch test/));
test('both full source policies retained',()=>{assert.equal(policies.length,2);assert.ok(policies.every(p=>p.sections.length>=8))});
test('all product and article image files are local and present',()=>{for(const item of [...articles,...products]){assert.ok(item.image.startsWith('/images/'));assert.ok(existsSync('public'+item.image),item.image)}});
test('explicit Instagram and Facebook destinations retained',()=>{const lib=readFileSync('src/lib.ts','utf8');assert.ok(lib.includes('https://www.instagram.com/solaceaestheticsnz/'));assert.ok(lib.includes('https://www.facebook.com/profile.php?id=61582853486294'))});
test('booking uses verified provider, not pretend availability',()=>{const lib=readFileSync('src/lib.ts','utf8');assert.ok(lib.includes('https://solace-aesthetics.book.app/book-now'));assert.ok(!readFileSync('src/app/[...slug]/page.tsx','utf8').includes('<form'))});
test('Git-triggered deployment is disabled for review build',()=>assert.equal(json('vercel.json').git.deploymentEnabled,false));
test('staging index protection is present in metadata, robots and headers',()=>{assert.match(readFileSync('public/robots.txt','utf8'),/Disallow: \//);assert.match(readFileSync('src/app/layout.tsx','utf8'),/index:false,follow:false/);assert.ok(json('vercel.json').headers[0].headers.some(h=>h.key==='X-Robots-Tag'&&h.value.includes('noindex')))});

test('Vercel uses the Next.js default build directory for static export',()=>{assert.equal(json('vercel.json').framework,'nextjs');assert.equal(json('vercel.json').outputDirectory,undefined);assert.match(readFileSync('next.config.ts','utf8'),/output: 'export'/)});
