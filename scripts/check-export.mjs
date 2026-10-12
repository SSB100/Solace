import {readFileSync,readdirSync,existsSync,statSync,writeFileSync} from 'node:fs';
import {join,dirname} from 'node:path';
const json=p=>JSON.parse(readFileSync(p,'utf8'));
const services=json('src/services.json'),articles=json('src/articles.json'),products=json('src/products.json'),categories=json('src/product-categories.json'),policies=json('src/policies.json');
const paths=['/','/book','/cart','/checkout','/home','/services','/about','/contact','/shop','/learn-with-solace-1',...services.map(s=>'/'+s.slug),...articles.map(a=>'/learn-with-solace-1/'+a.slug),...products.map(p=>'/shop/p/'+p.slug),...categories.filter(c=>c.urlSlug).map(c=>'/shop/'+c.urlSlug),...policies.map(p=>'/'+p.slug)];
const errors=[];let references=0;const files=[];function walk(p){for(const f of readdirSync(p)){const q=join(p,f);if(statSync(q).isDirectory())walk(q);else if(q.endsWith('.html'))files.push(q)}}walk('out');
for(const path of paths){const file='out'+(path==='/'?'':path)+'/index.html';if(!existsSync(file))errors.push('Missing route '+path)}
for(const f of files){const html=readFileSync(f,'utf8');if(!/<h1(?:\s|>)/.test(html))errors.push('Missing H1 '+f);if(!html.includes('noindex'))errors.push('Missing noindex '+f);for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=match[1].replaceAll('&amp;','&');if(!url.startsWith('/')||url.startsWith('//'))continue;references++;const [rawPath]=url.split(/[?#]/);const path=decodeURIComponent(rawPath);const exists=existsSync('out'+path)||existsSync('out'+path+'/index.html');if(!exists)errors.push(`${f}: missing ${url}`)}}
if(errors.length){console.error([...new Set(errors)].join('\n'));process.exit(1)}
const report={routes:paths.length,htmlFiles:files.length,internalReferences:references,missing:0};writeFileSync('docs/export-verification.json',JSON.stringify(report,null,2)+'\n');console.log(report);
