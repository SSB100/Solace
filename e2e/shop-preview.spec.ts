import {test, expect, type Page} from '@playwright/test';
import productsData from '../src/products.json';

type Product = {
  slug: string;
  title: string;
  image: string;
  description: string;
  variants: {name: string; price: string; galleryIndex?: number}[];
  gallery?: {src: string; alt: string; width?: number; height?: number}[];
};
const products: Product[] = productsData;
const oil = products.find(product => product.slug === 'brow-code-gold-nourishing-growth-oil')!;
const STORAGE_KEY = 'solace-demo-basket-v1';

async function capture(page: Page, name: string) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.images);
    images.forEach(image => {image.loading = 'eager';});
    await Promise.all(images.map(image => image.decode().catch(() => {})));
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    window.scrollTo({top: 0, behavior: 'instant'});
  });
  expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
  await page.screenshot({path: `qa/shop-${name}.png`, fullPage: true});
}

async function storedBasket(page: Page) {
  return page.evaluate(key => JSON.parse(localStorage.getItem(key) ?? '[]'), STORAGE_KEY);
}

for (const width of [390, 1440]) {
  test(`on-site shopping demo preserves exact options and totals at ${width}px`, async ({page}) => {
    const writes: string[] = [];
    page.on('request', request => {
      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method())) writes.push(request.url());
    });
    await page.setViewportSize({width, height: width < 600 ? 844 : 1000});
    await page.goto(`/shop/p/${oil.slug}/`);
    const product = page.locator('.sp-product');
    await expect(page.locator('h1')).toHaveText(oil.title);
    await expect(product.getByText('Shop Demo', {exact: true})).toBeVisible();
    await expect(product.locator('.sp-product-description')).toContainText(oil.description);
    await expect(product.locator(`a[href^="https://www.solaceaesthetics.co.nz/shop"]`)).toHaveCount(0);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);

    const gallery = oil.gallery ?? [];
    expect(gallery.length, 'original product gallery was imported').toBeGreaterThan(1);
    const thumbs = product.getByRole('group', {name: 'Product gallery'}).getByRole('button');
    await expect(thumbs).toHaveCount(gallery.length);
    for (const [index, image] of gallery.entries()) {
      await thumbs.nth(index).click();
      await expect(thumbs.nth(index)).toHaveAttribute('aria-pressed', 'true');
      await expect(product.locator('.sp-main-image img')).toHaveAttribute('src', image.src);
    }
    await thumbs.first().focus();
    await page.keyboard.press('Home');
    await page.keyboard.press('ArrowRight');
    await expect(thumbs.nth(1)).toBeFocused();
    await expect(thumbs.nth(1)).toHaveAttribute('aria-pressed', 'true');
    await page.keyboard.press('End');
    await expect(thumbs.last()).toBeFocused();
    await expect(thumbs.last()).toHaveAttribute('aria-pressed', 'true');

    await product.getByLabel('Choose your option').selectOption('30ml');
    await expect(product.locator('.sp-product-price')).toContainText('NZ$90.00');
    const linkedImage = oil.variants.find(variant => variant.name === '30ml')?.galleryIndex;
    if (linkedImage !== undefined) await expect(product.locator('.sp-main-image img')).toHaveAttribute('src', gallery[linkedImage].src);
    await expect(product.getByRole('button', {name: 'Decrease quantity', exact: true})).toBeDisabled();
    await product.getByRole('button', {name: 'Increase quantity', exact: true}).click();
    await expect(product.locator('.sp-quantity output')).toHaveText('2');
    await product.getByRole('button', {name: 'Add to demo bag', exact: true}).click();
    await expect(product.locator('.sp-add-status')).toContainText('2 ×');
    await expect(page.getByRole('link', {name: 'Demo bag, 2 items'}).first()).toBeVisible();
    expect(await storedBasket(page)).toEqual([{slug: oil.slug, variant: '30ml', quantity: 2}]);
    await capture(page, `product-${width}`);
    await page.reload();
    await expect(page.getByRole('link', {name: 'Demo bag, 2 items'}).first()).toBeVisible();
    await product.locator('.sp-product-top').getByRole('link', {name: 'View demo bag'}).click();
    await expect(page).toHaveURL(/\/cart\/$/);
    const cart = page.locator('.sp-cart');
    await expect(cart.getByTestId('basket-subtotal')).toHaveText('NZ$180.00');
    await expect(cart.getByTestId('line-total')).toHaveText('NZ$180.00');
    await expect(cart.locator('.sp-item-variant')).toHaveText('30ml');
    await expect(cart.locator('.sp-quantity output')).toHaveText('2');
    await cart.getByRole('button', {name: `Increase quantity for ${oil.title}, 30ml`, exact: true}).click();
    await expect(cart.getByTestId('basket-subtotal')).toHaveText('NZ$270.00');
    await cart.getByRole('button', {name: `Decrease quantity for ${oil.title}, 30ml`, exact: true}).click();
    await expect(cart.getByTestId('basket-subtotal')).toHaveText('NZ$180.00');
    await cart.getByRole('link', {name: oil.title, exact: true}).click();
    await product.getByLabel('Choose your option').selectOption('5ml');
    await expect(product.locator('.sp-product-price')).toContainText('NZ$24.00');
    await product.getByRole('button', {name: 'Add to demo bag', exact: true}).click();
    await product.locator('.sp-product-top').getByRole('link', {name: 'View demo bag'}).click();
    await expect(cart.locator('.sp-cart-item')).toHaveCount(2);
    await expect(cart.getByTestId('basket-subtotal')).toHaveText('NZ$204.00');
    await cart.getByRole('button', {name: `Remove ${oil.title}, 5ml`, exact: true}).click();
    await expect(cart.locator('.sp-cart-item')).toHaveCount(1);
    await expect(cart.getByTestId('basket-subtotal')).toHaveText('NZ$180.00');
    await capture(page, `cart-${width}`);
    await cart.getByRole('link', {name: 'Explore checkout preview'}).click();
    await expect(page).toHaveURL(/\/checkout\/$/);
    const checkout = page.locator('.sp-checkout');
    await expect(checkout.getByTestId('basket-subtotal')).toHaveText('NZ$180.00');
    await expect(checkout.locator('.sp-review-item')).toContainText('30ml · Qty 2');
    await expect(checkout.locator('input, textarea, select, form')).toHaveCount(0);
    await expect(checkout.getByRole('button', {name: /place order|pay now|confirm order/i})).toHaveCount(0);
    await expect(checkout.getByText('Not calculated', {exact: true})).toBeVisible();
    await expect(checkout.getByText(/GST treatment is not separately specified/)).toBeVisible();
    for (const href of await checkout.locator('a').evaluateAll(links => links.map(link => link.getAttribute('href')))) expect(href).toMatch(/^\//);
    await capture(page, `checkout-${width}`);
    await checkout.getByRole('button', {name: 'Review demo order'}).click();
    await expect(checkout.getByRole('heading', {name: 'Your selection, imagined.'})).toBeFocused();
    await expect(checkout.locator('.sp-no-order')).toHaveText('Preview only. No order placed.');
    await expect(checkout.getByText(/No payment was taken and nothing has been sent to Solace/)).toBeVisible();
    await expect(checkout.getByRole('button', {name: 'Review demo order'})).toHaveCount(0);
    expect(await storedBasket(page)).toEqual([{slug: oil.slug, variant: '30ml', quantity: 2}]);
    await capture(page, `review-${width}`);
    await page.reload();
    await expect(checkout.getByRole('button', {name: 'Review demo order'})).toBeVisible();
    await checkout.getByRole('button', {name: 'Review demo order'}).click();
    await checkout.getByRole('button', {name: 'Clear demo bag'}).click();
    await expect(checkout.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
    await expect(checkout.getByRole('button', {name: 'Review demo order'})).toHaveCount(0);
    await page.goto('/cart/');
    await expect(cart.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
    await expect(cart.getByRole('link', {name: 'Explore checkout preview'})).toHaveCount(0);
    expect(await page.evaluate(() => ({local: localStorage.length, session: sessionStorage.length}))).toEqual({local: 0, session: 0});
    expect(writes).toEqual([]);
  });
}

test('demo bag validates stored data, uses catalogue prices and enforces quantity bounds', async ({page}) => {
  await page.goto('/cart/');
  await expect(page.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
  await page.evaluate(({key, slug}) => {
    localStorage.setItem(key, JSON.stringify([
      {slug, variant: '30ml', quantity: 99, price: 'NZ$0.01'},
      {slug, variant: '5ml', quantity: -3},
      {slug, variant: '5ml', quantity: 1.5},
      {slug, variant: '5ml', quantity: 100},
      {slug, variant: 'missing option', quantity: 2},
      {slug: 'missing-product', variant: 'Standard', quantity: 1},
    ]));
  }, {key: STORAGE_KEY, slug: oil.slug});
  await page.reload();
  await expect(page.locator('.sp-cart-item')).toHaveCount(1);
  await expect(page.getByTestId('basket-subtotal')).toHaveText('NZ$8,910.00');
  await expect(page.getByRole('button', {name: `Increase quantity for ${oil.title}, 30ml`, exact: true})).toBeDisabled();
  await page.goto(`/shop/p/${oil.slug}/`);
  await page.getByLabel('Choose your option').selectOption('30ml');
  await expect(page.getByRole('button', {name: 'Add to demo bag', exact: true})).toBeDisabled();
  await expect(page.locator('.sp-limit-note')).toContainText('Demo limit: 99');
  await page.goto('/cart/');
  await page.getByRole('button', {name: `Decrease quantity for ${oil.title}, 30ml`, exact: true}).click();
  expect(await storedBasket(page)).toEqual([{slug: oil.slug, variant: '30ml', quantity: 98}]);
  await page.getByRole('button', {name: 'Clear demo bag'}).click();
  await expect(page.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
  await page.evaluate(key => localStorage.setItem(key, '{invalid JSON'), STORAGE_KEY);
  await page.reload();
  await expect(page.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
  await page.goto('/checkout/');
  await expect(page.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
  await expect(page.locator('.sp-checkout input, .sp-checkout form')).toHaveCount(0);
});

test('all source galleries and published options remain available', async ({page}) => {
  const multiImageProducts = products.filter(product => (product.gallery?.length ?? 0) > 1);
  expect(multiImageProducts.length).toBeGreaterThan(0);
  for (const product of multiImageProducts) {
    await page.goto(`/shop/p/${product.slug}/`);
    const gallery = product.gallery!;
    await expect(page.locator('.sp-thumbnails button')).toHaveCount(gallery.length);
    for (const [index, image] of gallery.entries()) {
      await page.getByRole('button', {name: `View image ${index + 1} of ${gallery.length}`, exact: true}).click();
      const mainImage = page.locator('.sp-main-image img');
      await expect(mainImage).toHaveAttribute('src', image.src);
      await expect(mainImage).toHaveAttribute('alt', image.alt || product.title);
      await mainImage.evaluate((image: HTMLImageElement) => image.decode());
      expect(await mainImage.evaluate((image: HTMLImageElement) => image.naturalWidth > 0)).toBe(true);
      expect(await mainImage.evaluate((image: HTMLImageElement) => image.getBoundingClientRect().width <= image.naturalWidth + 1)).toBe(true);
    }
    if (product.variants.length > 1) {
      await expect(page.getByLabel('Choose your option').locator('option')).toHaveCount(product.variants.length);
      for (const variant of product.variants) {
        await page.getByLabel('Choose your option').selectOption(variant.name);
        await expect(page.locator('.sp-product-price')).toContainText(variant.price);
        if (variant.galleryIndex !== undefined) await expect(page.locator('.sp-main-image img')).toHaveAttribute('src', gallery[variant.galleryIndex].src);
      }
    }
  }
});

test('another tab updates the demo bag and invalidates an old review', async ({page, context}) => {
  await page.goto(`/shop/p/${oil.slug}/`);
  await page.getByRole('button', {name: 'Add to demo bag', exact: true}).click();
  const checkout = await context.newPage();
  await checkout.goto('/checkout/');
  await checkout.getByRole('button', {name: 'Review demo order'}).click();
  await expect(checkout.locator('.sp-no-order')).toBeVisible();
  await page.goto('/cart/');
  await page.getByRole('button', {name: `Increase quantity for ${oil.title}, 5ml`, exact: true}).click();
  await expect(checkout.getByTestId('basket-subtotal')).toHaveText('NZ$48.00');
  await expect(checkout.locator('.sp-no-order')).toHaveCount(0);
  await expect(checkout.getByRole('button', {name: 'Review demo order'})).toBeVisible();
  await page.getByRole('button', {name: 'Clear demo bag'}).click();
  await expect(checkout.getByRole('heading', {name: 'Your demo bag is empty.'})).toBeVisible();
});
