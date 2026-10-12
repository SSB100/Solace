import {test,expect,type Page} from '@playwright/test';

async function chrome(page:Page,label:string,width:number){
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all(Array.from(document.querySelectorAll<HTMLImageElement>('.header img,.footer img'),image=>image.decode().catch(()=>{})));scrollTo({top:0,behavior:'instant'});if(document.activeElement instanceof HTMLElement)document.activeElement.blur()});
  const metrics=await page.evaluate(()=>{
    const targets=['.header','.brand','.desktop-nav','.sp-mini-cart','.header-book','.menu-toggle','.footer','.footer-top','.footer-brand','.footer-grid','.footer-bottom'];
    const properties=['display','paddingTop','paddingRight','paddingBottom','paddingLeft','borderTopWidth','borderTopColor','borderBottomWidth','borderBottomColor','backgroundColor','color','fontFamily','fontSize','gap','gridTemplateColumns'] as const;
    return targets.map(selector=>{const el=document.querySelector<HTMLElement>(selector)!;const style=getComputedStyle(el);const rect=el.getBoundingClientRect();const parent=el.closest(selector.startsWith('.footer')?'.footer':'.header')!.getBoundingClientRect();return {selector,styles:Object.fromEntries(properties.map(key=>[key,style[key]])),box:{x:Math.round((rect.x-parent.x)*100)/100,y:Math.round((rect.y-parent.y)*100)/100,width:Math.round(rect.width*100)/100,height:Math.round(rect.height*100)/100}}});
  });
  await page.locator('.header').screenshot({path:`qa/chrome-${label}-header-${width}.png`});
  await page.locator('.footer').screenshot({path:`qa/chrome-${label}-footer-${width}.png`});
  expect(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1)).toBe(false);
  return {metrics,footer:await page.locator('.footer').innerHTML()};
}

async function navigate(page:Page,label:string,width:number){
  await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
  if(width<1000){await page.getByRole('button',{name:'Open menu'}).click();await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:label,exact:true}).click();await expect(page.getByRole('navigation',{name:'Mobile navigation'})).toBeHidden();expect(await page.evaluate(()=>document.body.style.overflow)).not.toBe('hidden')}
  else await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:label,exact:true}).click();
}

for(const width of [390,1440,1920])test(`shared chrome stays consistent through navigation at ${width}px`,async({page})=>{
  await page.setViewportSize({width,height:width<700?844:1080});
  await page.goto('/about/');const reference=await chrome(page,'about',width);
  await page.getByRole('link',{name:'Solace Aesthetics home',exact:true}).click();await expect(page).toHaveURL(/\/$/);expect(await chrome(page,'home',width)).toEqual(reference);
  await expect(page.locator('.home-visit address,.home-visit a[href^="tel:"]')).toHaveCount(0);
  for(const [label,route] of [['Treatments','services'],['Shop','shop'],['Visit us','contact'],['Our story','about']]){await navigate(page,label,width);await expect(page).toHaveURL(new RegExp('/'+route+'/$'));expect(await chrome(page,route,width)).toEqual(reference)}
  await page.locator('.footer').getByRole('link',{name:'Plan your visit',exact:true}).click();await expect(page).toHaveURL(/\/book\/$/);expect(await chrome(page,'book',width)).toEqual(reference);
  await page.locator('.footer-brand').click();await expect(page).toHaveURL(/\/$/);expect(await chrome(page,'home-return',width)).toEqual(reference);
});
