import {test, expect, type Page} from '@playwright/test';
import services from '../src/services.json';

const bookingUrl = 'https://solace-aesthetics.book.app/book-now';

async function capture(page: Page, name: string) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(Array.from(document.images, image => image.decode().catch(() => {})));
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    window.scrollTo({top: 0, behavior: 'instant'});
  });
  await page.screenshot({path: `qa/booking-${name}.png`, fullPage: true});
}

async function category(page: Page, slug: string, width: number) {
  const service = services.find(item => item.slug === slug)!;
  if (width < 581) await page.getByLabel('Browse treatments').selectOption(slug);
  else await page.getByRole('group', {name: 'Treatment category'}).getByRole('button', {name: `${service.title} ${service.offerings.length}`, exact: true}).click();
}

for (const width of [390, 1440]) {
  test(`booking visual preview is clear, accessible and reversible at ${width}px`, async ({page}) => {
    const writes: string[] = [];
    page.on('request', request => {
      if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(request.method())) writes.push(request.url());
    });
    await page.setViewportSize({width, height: width < 600 ? 844 : 1000});
    await page.goto('/book/');
    await expect(page.locator('h1')).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://www.solaceaesthetics.co.nz/book/');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    await expect(page.getByRole('link', {name: 'Go to live booking on Ovatu'})).toHaveAttribute('href', bookingUrl);
    await expect(page.getByRole('link', {name: 'Check live booking on Ovatu'})).toHaveAttribute('href', bookingUrl);
    await expect(page.getByRole('button', {name: 'Explore example times'})).toBeDisabled();
    await expect(page.locator('.bp-treatment-options input')).toHaveCount(8);
    await expect(page.locator('.booking-preview input:not([type="radio"]), .booking-preview textarea, .booking-preview form')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
    await capture(page, `initial-${width}`);

    await page.getByRole('radio', {name: /Calm & Restore Facial/}).check();
    await expect(page.locator('.bp-summary-selection')).toContainText('$140 NZD');
    await expect(page.locator('.bp-summary-selection')).toContainText('60 minutes');
    await page.getByRole('button', {name: 'Explore example times'}).click();
    await expect(page.getByRole('heading', {name: 'Imagine a moment for yourself.'})).toBeFocused();
    await expect(page.getByText('Illustrative availability only', {exact: true})).toBeVisible();
    await expect(page.getByRole('radio', {name: '9:00 am', exact: true})).toBeDisabled();
    await page.getByRole('radio', {name: 'Example date: 18 November 2026', exact: true}).check();
    await page.getByRole('radio', {name: '10:30 am', exact: true}).check();
    await page.getByRole('radio', {name: 'Example date: 19 November 2026', exact: true}).check();
    await expect(page.getByRole('radio', {name: '10:30 am', exact: true})).not.toBeChecked();
    await expect(page.getByRole('button', {name: 'Review illustrative plan'})).toBeDisabled();
    await page.getByRole('radio', {name: '10:30 am', exact: true}).check();
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
    await capture(page, `calendar-${width}`);
    await page.getByRole('button', {name: 'Review illustrative plan'}).click();
    await expect(page.getByRole('heading', {name: 'Your moment, imagined.'})).toBeFocused();
    await expect(page.getByText('Nothing is booked. Your example date and time are not reserved.', {exact: true})).toBeVisible();
    await expect(page.getByRole('heading', {name: 'Thursday, 19 November 2026'})).toBeVisible();
    await expect(page.getByRole('link', {name: 'Continue to live booking on Ovatu'})).toHaveAttribute('href', bookingUrl);
    await expect(page.getByText(/Preview selections are not transferred/)).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1)).toBe(false);
    await capture(page, `review-${width}`);

    await page.getByRole('button', {name: 'Edit example date and time'}).click();
    await expect(page.getByRole('radio', {name: 'Example date: 19 November 2026', exact: true})).toBeChecked();
    await expect(page.getByRole('radio', {name: '10:30 am', exact: true})).toBeChecked();
    await page.getByRole('button', {name: 'Back', exact: true}).click();
    await expect(page.getByRole('radio', {name: /Calm & Restore Facial/})).toBeChecked();
    await category(page, 'electrolysis', width);
    await expect(page.locator('.bp-care-note')).toContainText('at least 24 hours before treatment');
    await expect(page.getByRole('button', {name: 'Explore example times'})).toBeDisabled();
    await page.getByRole('radio', {name: /Short consultation/}).check();
    await expect(page.locator('.bp-summary-selection')).toContainText('$30 NZD');
    await expect(page.locator('.bp-summary-selection')).toContainText('Confirm with Solace');
    await page.getByRole('button', {name: 'Explore example times'}).click();
    await expect(page.locator('.bp-care-note')).toContainText('at least 24 hours before treatment');
    await expect(page.getByRole('button', {name: 'Review illustrative plan'})).toBeDisabled();
    await page.getByRole('radio', {name: 'Example date: 24 November 2026', exact: true}).check();
    await page.getByRole('radio', {name: '9:00 am', exact: true}).check();
    await page.getByRole('button', {name: 'Review illustrative plan'}).click();
    await expect(page.locator('.bp-care-note')).toContainText('at least 24 hours before treatment');
    await page.getByRole('button', {name: 'Start preview again'}).click();
    await expect(page.getByRole('button', {name: 'Explore example times'})).toBeDisabled();
    await expect(page.locator('.bp-summary-selection')).toContainText('Let’s find your treatment');

    await page.getByRole('radio', {name: /Calm & Restore Facial/}).focus();
    await page.keyboard.press('Space');
    await expect(page.getByRole('radio', {name: /Calm & Restore Facial/})).toBeChecked();
    await page.keyboard.press('ArrowDown');
    await expect(page.getByRole('radio', {name: /Balance & Clarify Facial/})).toBeChecked();
    await page.reload();
    await expect(page.getByRole('button', {name: 'Explore example times'})).toBeDisabled();
    expect(writes).toEqual([]);
    expect(await page.evaluate(() => ({local: localStorage.length, session: sessionStorage.length}))).toEqual({local: 0, session: 0});
  });
}

test('booking preview preserves every catalogue option and consultation note', async ({page}) => {
  await page.setViewportSize({width: 1440, height: 1000});
  await page.goto('/book/');
  for (const service of services) {
    await category(page, service.slug, 1440);
    const options = page.locator('.bp-treatment-option');
    await expect(options).toHaveCount(service.offerings.length);
    for (const [index, offering] of service.offerings.entries()) {
      await expect(options.nth(index)).toContainText(offering.name);
      await expect(options.nth(index)).toContainText(offering.price || 'Price on');
      await expect(options.nth(index)).toContainText(offering.duration || 'Duration: confirm with Solace');
    }
    if (service.consultation) await expect(page.locator('.bp-care-note')).toContainText(service.consultation);
    else await expect(page.locator('.bp-care-note')).toHaveCount(0);
  }
  await category(page, 'solacejourneys', 1440);
  await page.getByRole('radio', {name: /Future Proof/}).check();
  await expect(page.locator('.bp-summary-selection')).toContainText('Package price');
  await expect(page.locator('.bp-summary-selection')).toContainText('$625 NZD');
  await page.getByRole('button', {name: 'Explore example times'}).click();
  await expect(page.getByText(/This example represents the first visit only/)).toBeVisible();
});
