'use client';

import {useEffect, useMemo, useRef, useState, useSyncExternalStore} from 'react';
import {products} from '@/lib';
import './shop-preview.css';

type Product = {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: string;
  variants: {name: string; price: string; galleryIndex?: number}[];
  gallery?: {src: string; alt: string; width?: number; height?: number}[];
};
type BasketItem = {slug: string; variant: string; quantity: number};
type BasketLine = BasketItem & {product: Product; unitCents: number};

const STORAGE_KEY = 'solace-demo-basket-v1';
const BASKET_EVENT = 'solace-demo-basket-change';
const MAX_QUANTITY = 99;
const EMPTY_BASKET = '[]';
const catalogue: Product[] = products;
let memoryBasket = EMPTY_BASKET;
let memoryOnly = false;

/** Only exact published NZ dollar prices are accepted. All arithmetic uses cents. */
function priceInCents(price: string): number | null {
  const match = /^NZ\$((?:\d{1,3}(?:,\d{3})+)|\d+)\.(\d{2})$/.exec(price.trim());
  if (!match) return null;
  const value = Number(match[1].replaceAll(',', '')) * 100 + Number(match[2]);
  return Number.isSafeInteger(value) && value >= 0 ? value : null;
}

function money(cents: number) {
  return `NZ$${(cents / 100).toLocaleString('en-NZ', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;
}

function readBasket(): string {
  if (typeof window === 'undefined') return EMPTY_BASKET;
  if (memoryOnly) return memoryBasket;
  try {
    return window.localStorage.getItem(STORAGE_KEY) ?? EMPTY_BASKET;
  } catch {
    return memoryBasket;
  }
}

function subscribe(listener: () => void) {
  const onStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY || event.key === null) listener();
  };
  window.addEventListener('storage', onStorage);
  window.addEventListener(BASKET_EVENT, listener);
  return () => {
    window.removeEventListener('storage', onStorage);
    window.removeEventListener(BASKET_EVENT, listener);
  };
}

function basketLines(raw: string): BasketLine[] {
  try {
    const data: unknown = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    const lines: BasketLine[] = [];
    for (const item of data.slice(0, 100)) {
      if (!item || typeof item !== 'object' || typeof item.slug !== 'string' || typeof item.variant !== 'string'
        || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > MAX_QUANTITY) continue;
      const product = catalogue.find(product => product.slug === item.slug);
      const variant = product?.variants.find(variant => variant.name === item.variant);
      const unitCents = variant ? priceInCents(variant.price) : null;
      if (!product || unitCents === null) continue;
      const existing = lines.find(line => line.slug === item.slug && line.variant === item.variant);
      if (existing) existing.quantity = Math.min(MAX_QUANTITY, existing.quantity + item.quantity);
      else lines.push({slug: item.slug, variant: item.variant, quantity: item.quantity, product, unitCents});
    }
    return lines;
  } catch {
    return [];
  }
}

function saveBasket(items: BasketItem[]) {
  // Never persist catalogue copy, prices, identifiers for people, or personal details.
  memoryBasket = JSON.stringify(items.map(({slug, variant, quantity}) => ({slug, variant, quantity})));
  try {
    if (memoryBasket === EMPTY_BASKET) window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, memoryBasket);
    memoryOnly = false;
  } catch {
    memoryOnly = true;
  }
  window.dispatchEvent(new Event(BASKET_EVENT));
}

const serverBasket = () => EMPTY_BASKET;
const clientReady = () => true;
const serverReady = () => false;
const memoryStatus = () => memoryOnly;

function useBasket() {
  const raw = useSyncExternalStore(subscribe, readBasket, serverBasket);
  const ready = useSyncExternalStore(subscribe, clientReady, serverReady);
  const temporary = useSyncExternalStore(subscribe, memoryStatus, serverReady);
  const lines = useMemo(() => basketLines(raw), [raw]);
  return {
    lines, ready, temporary,
    count: lines.reduce((total, line) => total + line.quantity, 0),
    subtotal: lines.reduce((total, line) => total + line.unitCents * line.quantity, 0),
  };
}

function changeQuantity(slug: string, variant: string, quantity: number) {
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY) return;
  saveBasket(basketLines(readBasket()).map(line => line.slug === slug && line.variant === variant ? {...line, quantity} : line));
}

function removeItem(slug: string, variant: string) {
  saveBasket(basketLines(readBasket()).filter(line => line.slug !== slug || line.variant !== variant));
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function BagIcon() {
  return <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M5 7.5h14l1 13H4l1-13Z"/><path d="M8.5 8V5a3.5 3.5 0 0 1 7 0v3"/></svg>;
}

export function MiniCartLink({className = '', onClick}: {className?: string; onClick?: () => void}) {
  const {count} = useBasket();
  return <a className={`sp-mini-cart ${className}`} href="/cart/" onClick={onClick} aria-label={`Demo bag, ${count} ${count === 1 ? 'item' : 'items'}`}><BagIcon/><span className="sp-mini-label">Demo bag</span><span className="sp-mini-count" aria-hidden="true">{count}</span></a>;
}

function DemoNotice() {
  return <div className="sp-demo-notice"><span className="sp-demo-pill">Shop Demo</span><p>Explore the shopping experience. No real orders or payments.</p></div>;
}

function StorageNotice({temporary}: {temporary: boolean}) {
  return temporary ? <p className="sp-storage-notice" role="status">Your browser couldn’t save this demo bag. Selections will be lost when you leave or reload this page. Allow local storage to try the full preview.</p> : null;
}

function Quantity({value, onChange, label = 'Quantity', max = MAX_QUANTITY}: {value: number; onChange: (value: number) => void; label?: string; max?: number}) {
  return <div className="sp-quantity" role="group" aria-label={label}>
    <button type="button" onClick={() => onChange(value - 1)} disabled={value <= 1} aria-label={`Decrease ${label.charAt(0).toLowerCase() + label.slice(1)}`}>−</button>
    <output aria-label={label} aria-live="polite">{value}</output>
    <button type="button" onClick={() => onChange(value + 1)} disabled={value >= max} aria-label={`Increase ${label.charAt(0).toLowerCase() + label.slice(1)}`}>+</button>
  </div>;
}

export function ProductExperience({product}: {product: Product}) {
  const gallery: NonNullable<Product['gallery']> = product.gallery?.length ? product.gallery : [{src: product.image, alt: product.title}];
  const [imageIndex, setImageIndex] = useState(0);
  const [variantName, setVariantName] = useState(product.variants[0]?.name ?? '');
  const [quantity, setQuantity] = useState(1);
  const [announcement, setAnnouncement] = useState('');
  const thumbs = useRef<HTMLDivElement>(null);
  const {lines, temporary} = useBasket();
  const variant = product.variants.find(option => option.name === variantName);
  const unitCents = variant ? priceInCents(variant.price) : null;
  const existingQuantity = lines.find(line => line.slug === product.slug && line.variant === variantName)?.quantity ?? 0;
  const tooMany = quantity + existingQuantity > MAX_QUANTITY;
  const mainImage = gallery[imageIndex] ?? gallery[0];

  function addToBasket() {
    if (!variant || unitCents === null) return;
    const current = basketLines(readBasket());
    const existing = current.find(line => line.slug === product.slug && line.variant === variantName);
    if ((existing?.quantity ?? 0) + quantity > MAX_QUANTITY) {
      setAnnouncement(`The demo limit is ${MAX_QUANTITY} of each option. Please adjust your bag.`);
      return;
    }
    if (existing) existing.quantity += quantity;
    else current.push({slug: product.slug, variant: variantName, quantity, unitCents, product});
    saveBasket(current);
    setAnnouncement(`${quantity} × ${product.title}${variantName === 'Standard' ? '' : `, ${variantName}`} added to your demo bag.`);
  }

  return <section className="sp-product sp-shell">
    <div className="sp-product-top"><a className="sp-back" href="/shop/">← All skincare & beauty</a><a className="sp-back" href="/cart/">View demo bag <Arrow/></a></div>
    <div className="sp-product-grid">
      <div className="sp-gallery" aria-label={`${product.title} images`}>
        <figure className="sp-main-image"><img src={mainImage.src} alt={mainImage.alt || product.title} width={mainImage.width} height={mainImage.height} fetchPriority="high"/><figcaption>{String(imageIndex + 1).padStart(2, '0')} <span>/ {String(gallery.length).padStart(2, '0')}</span></figcaption></figure>
        {gallery.length > 1 && <div className="sp-thumbnails" ref={thumbs} role="group" aria-label="Product gallery" onKeyDown={event => {
          const offsets: Record<string, number> = {ArrowRight: 1, ArrowLeft: -1};
          if (!(event.key in offsets) && event.key !== 'Home' && event.key !== 'End') return;
          event.preventDefault();
          const next = event.key === 'Home' ? 0 : event.key === 'End' ? gallery.length - 1 : (imageIndex + offsets[event.key] + gallery.length) % gallery.length;
          setImageIndex(next);
          thumbs.current?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus();
        }}>{gallery.map((image, index) => <button type="button" key={`${image.src}-${index}`} aria-label={`View image ${index + 1} of ${gallery.length}`} aria-pressed={imageIndex === index} onClick={() => setImageIndex(index)}><img src={image.src} alt="" width="100" height="100" loading="lazy"/></button>)}</div>}
        <p className="sp-gallery-note">The Solace collection <span>{product.variants.length>1 ? 'Gallery shows product options; choose your option separately.' : 'Images from the existing product catalogue.'}</span></p>
      </div>
      <div className="sp-product-copy">
        
        <h1>{product.title}</h1>
        <p className="sp-product-price">{unitCents === null ? 'Price unavailable' : money(unitCents)} <span>NZD</span></p>
        <DemoNotice/>
        <div className="sp-purchase-controls">
          {product.variants.length > 1 ? <label className="sp-option-label" htmlFor={`sp-variant-${product.slug}`}>Choose your option<select id={`sp-variant-${product.slug}`} value={variantName} onChange={event => {
            setVariantName(event.target.value);
            setAnnouncement('');
            const nextImage = product.variants.find(option => option.name === event.target.value)?.galleryIndex;
            if (nextImage !== undefined && nextImage >= 0 && nextImage < gallery.length) setImageIndex(nextImage);
          }}>{product.variants.map(option => <option key={option.name} value={option.name}>{option.name} · {option.price || 'Price unavailable'}</option>)}</select></label> : <p className="sp-single-option">{variantName && variantName !== 'Standard' ? variantName : 'One option'}</p>}
          <div className="sp-purchase-row"><div><p className="sp-control-label">Quantity</p><Quantity value={quantity} onChange={value => {setQuantity(value); setAnnouncement('');}}/></div><button type="button" className="sp-button sp-add-button" onClick={addToBasket} disabled={unitCents === null || tooMany}>Add to demo bag <span aria-hidden="true">+</span></button></div>
          {tooMany && <p className="sp-limit-note">Demo limit: {MAX_QUANTITY} of each option, including items already in your bag. <a href="/cart/">Edit your bag.</a></p>}
          {unitCents === null && <p className="sp-limit-note">A published price isn’t available for this option, so it can’t be added to the demo bag.</p>}
          <p className="sp-add-status" role="status" aria-live="polite">{announcement}{announcement && <> <a href="/cart/">View demo bag <Arrow/></a></>}</p>
          <StorageNotice temporary={temporary}/>
          <p className="sp-fine-print">Catalogue prices shown. Stock isn’t checked in this demo. Your bag stays in this browser; no personal details are collected.</p>
        </div>
        <div className="sp-product-description"><h2>About this product</h2><p>{product.description}</p></div>
        <a className="sp-text-link" href="/contact/">A question? Talk to Stephanie <Arrow/></a>
      </div>
    </div>
  </section>;
}

function BasketSummary({subtotal, count, children}: {subtotal: number; count: number; children?: React.ReactNode}) {
  return <aside className="sp-summary" aria-label="Demo bag summary">
    <p className="eyebrow">A moment to review</p><h2>Your selection.</h2>
    <dl><div><dt>{count} {count === 1 ? 'item' : 'items'}</dt><dd>{money(subtotal)}</dd></div><div><dt>Shipping</dt><dd>Not calculated</dd></div></dl>
    <div className="sp-subtotal"><span>Product subtotal</span><strong data-testid="basket-subtotal">{money(subtotal)}</strong></div>
    <p className="sp-fine-print">Published catalogue prices in NZD. GST treatment is not separately specified. This is a product subtotal, not a final payable total.</p>
    {children}
    <p className="sp-summary-footnote">Preview only · Nothing will be charged</p>
  </aside>;
}

function EmptyBasket({checkout = false}: {checkout?: boolean}) {
  return <div className="sp-empty"><div className="sp-empty-icon"><BagIcon/></div><p className="eyebrow">Room for a little care</p><h2>Your demo bag is empty.</h2><p>{checkout ? 'Choose a product to explore the checkout preview.' : 'Explore the collection and add something to try the shopping experience.'}</p><a className="sp-button" href="/shop/">Explore skincare & beauty <Arrow/></a></div>;
}

function ShopSteps({checkout = false}: {checkout?: boolean}) {
  return <ol className="sp-steps" aria-label="Shop preview progress"><li><a href="/shop/"><span>01</span> Explore</a></li><li aria-current={!checkout ? 'step' : undefined}><a href="/cart/"><span>02</span> Demo bag</a></li><li aria-current={checkout ? 'step' : undefined}><span>03</span> Checkout preview</li></ol>;
}

export function CartPageContent() {
  const {lines, count, subtotal, ready, temporary} = useBasket();
  return <section className="sp-cart sp-shell">
    <ShopSteps/>
    <header className="sp-page-heading"><p className="eyebrow">Care beyond the treatment room</p><h1>Your demo bag.</h1><p>Your favourites, gathered in one place.</p></header>
    <DemoNotice/>
    <StorageNotice temporary={temporary}/>
    {!ready ? <p className="sp-loading" role="status">Loading your demo bag…</p> : !lines.length ? <EmptyBasket/> : <div className="sp-cart-layout">
      <div className="sp-cart-items"><div className="sp-items-heading"><h2>Your demo bag <span>({count})</span></h2><button type="button" className="sp-clear" onClick={() => saveBasket([])}>Clear demo bag</button></div>
        {lines.map(line => <article className="sp-cart-item" key={`${line.slug}-${line.variant}`} aria-label={`${line.product.title}, ${line.variant}`}>
          <a className="sp-cart-image" href={`/shop/p/${line.slug}/`} tabIndex={-1} aria-hidden="true"><img src={line.product.image} alt="" width="200" height="240"/></a>
          <div className="sp-cart-item-copy"><a className="sp-item-title" href={`/shop/p/${line.slug}/`}><h3>{line.product.title}</h3></a><p className="sp-item-variant">{line.variant === 'Standard' ? 'Standard option' : line.variant}</p><p className="sp-item-unit">{money(line.unitCents)} each</p><div className="sp-item-controls"><Quantity value={line.quantity} onChange={quantity => changeQuantity(line.slug, line.variant, quantity)} label={`Quantity for ${line.product.title}, ${line.variant}`}/><button type="button" className="sp-remove" onClick={() => removeItem(line.slug, line.variant)} aria-label={`Remove ${line.product.title}, ${line.variant}`}>Remove</button></div></div>
          <strong className="sp-line-total" data-testid="line-total">{money(line.unitCents * line.quantity)}</strong>
        </article>)}
        <div className="sp-basket-note"><span aria-hidden="true">↳</span><p>Keep exploring. Your demo bag is saved in this browser using only product choices and quantities. The demo limit of 99 per option does not indicate stock availability.</p></div>
        <a className="sp-text-link" href="/shop/">Continue exploring <Arrow/></a>
      </div>
      <BasketSummary subtotal={subtotal} count={count}><a className="sp-button sp-full-width" href="/checkout/">Explore checkout preview <Arrow/></a></BasketSummary>
    </div>}
  </section>;
}

export function CheckoutPreview() {
  const {lines, count, subtotal, ready, temporary} = useBasket();
  const [reviewedBasket, setReviewedBasket] = useState<string | null>(null);
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const fingerprint = JSON.stringify(lines.map(({slug, variant, quantity}) => ({slug, variant, quantity})));
  const reviewed = reviewedBasket === fingerprint && lines.length > 0;
  useEffect(() => {if (reviewed) reviewHeading.current?.focus();}, [reviewed]);

  return <section className="sp-checkout sp-shell">
    <ShopSteps checkout/>
    <header className="sp-page-heading"><p className="eyebrow">The next part, imagined</p><h1>Checkout preview.</h1><p>A preview of how shopping with Solace could feel, all in one place.</p></header>
    <DemoNotice/>
    <StorageNotice temporary={temporary}/>
    {!ready ? <p className="sp-loading" role="status">Loading your demo bag…</p> : !lines.length ? <EmptyBasket checkout/> : <div className="sp-cart-layout sp-checkout-layout">
      <div className="sp-checkout-main">
        {reviewed ? <section className="sp-review-result" aria-labelledby="sp-review-heading"><span className="sp-demo-pill">Demo review</span><h2 id="sp-review-heading" ref={reviewHeading} tabIndex={-1}>Your selection, imagined.</h2><p className="sp-no-order">Preview only. No order placed.</p><p>No payment was taken and nothing has been sent to Solace. Your selections remain in your demo bag.</p><a className="sp-text-link" href="/cart/">Edit your demo bag <Arrow/></a></section> : <section className="sp-checkout-explanation"><p className="eyebrow">A preview, with no commitments</p><h2>Everything in its place.</h2><p>Review your chosen products below. Delivery details and payment would come next in a live shop.</p><div className="sp-future-steps"><div><span>01</span><h3>Delivery</h3><p>Not collected in this demo. Shipping has not been calculated.</p></div><div><span>02</span><h3>Payment</h3><p>Not connected. No card details or personal information are needed.</p></div></div></section>}
        <section className="sp-review-items" aria-label="Products in your demo order"><div className="sp-items-heading"><h2>Your selected products</h2><a className="sp-clear" href="/cart/">Edit bag</a></div>{lines.map(line => <article className="sp-review-item" key={`${line.slug}-${line.variant}`}><img src={line.product.image} alt="" width="100" height="120"/><div><h3>{line.product.title}</h3><p>{line.variant === 'Standard' ? 'Standard option' : line.variant} · Qty {line.quantity}</p><p>{money(line.unitCents)} each</p></div><strong>{money(line.unitCents * line.quantity)}</strong></article>)}</section>
        <p className="sp-privacy-note">This preview has no contact, delivery or payment form. Only product choices and quantities are saved in your browser.</p>
      </div>
      <BasketSummary subtotal={subtotal} count={count}>{reviewed ? <><p className="sp-summary-reviewed">Preview only. No order placed.</p><a className="sp-button sp-full-width" href="/shop/">Back to the collection <Arrow/></a><button type="button" className="sp-clear sp-summary-clear" onClick={() => {saveBasket([]); setReviewedBasket(null);}}>Clear demo bag</button></> : <><button type="button" className="sp-button sp-full-width" onClick={() => setReviewedBasket(fingerprint)}>Review demo order <Arrow/></button><p className="sp-fine-print sp-review-note">Reviewing shows a preview summary only. It does not place an order.</p></>}</BasketSummary>
    </div>}
  </section>;
}
