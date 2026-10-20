const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert=require('node:assert/strict');
const {execFileSync}=require('node:child_process');
const base=process.env.SEO_TEST_URL || 'http://127.0.0.1:4173/portfolio/';
const routes=['services/web-development/','services/telegram-mini-app/','services/mobile-mvp/','work/rfzavod/','work/fitdiary/','work/training-log/','work/learnjs/'];
(async()=>{const browser=await chromium.launch({channel:'chrome',headless:true});try{
  const titles=new Set(),descriptions=new Set(),links=new Set();
  const sitemap=await (await fetch(base+'sitemap.xml')).text();
  for(const width of [320,390,768,1440]){
    const context=await browser.newContext({viewport:{width,height:900},javaScriptEnabled:false});
    for(const route of routes){
      const page=await context.newPage();const response=await page.goto(base+route);assert.equal(response.status(),200,route);
      assert.equal(await page.locator('h1').count(),1);assert.ok((await page.locator('h1').innerText()).trim().length>0);
      const title=await page.title(),desc=await page.locator('meta[name="description"]').getAttribute('content');
      if(width===320){assert.ok(!titles.has(title),'Duplicate title');assert.ok(!descriptions.has(desc),'Duplicate description');titles.add(title);descriptions.add(desc);}
      const canonical=await page.locator('link[rel="canonical"]').getAttribute('href');assert.equal(canonical,'https://razievdaniil-rgb.github.io/portfolio/'+route);assert.ok(sitemap.includes(canonical));
      assert.equal(await page.locator('meta[property="og:url"]').getAttribute('content'),canonical);
      for(const json of await page.locator('script[type="application/ld+json"]').allTextContents()) JSON.parse(json);
      assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,'Overflow '+route+' '+width);
      await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{img.loading='eager';return img.decode()})));
      if(route.startsWith('services/')){
        assert.ok(await page.locator('.faq-list details').count()>=7);
        if(width===1440){const box=await page.locator('.hero-actions .button-primary').boundingBox();assert.ok(box.y>=0&&box.y+box.height<=900,`CTA outside viewport: ${route} ${JSON.stringify(box)}`);}
      }else{assert.ok((await page.locator('.seo-case-section').count())>=3);assert.equal(await page.locator('.case-gallery img').count(),await page.locator('.case-gallery figcaption').count());if(width===1440){const box=await page.locator('.seo-case-cta').boundingBox();assert.ok(box.y>=0&&box.y+box.height<=900,`Case CTA outside viewport: ${route}`);}}
      for(const href of await page.locator('a[href]').evaluateAll(as=>as.map(a=>a.getAttribute('href')))){if(href.startsWith('/portfolio/'))links.add(href.split('#')[0]);}
      if([390,1440].includes(width))await page.screenshot({path:`C:/Users/Daniil/tmp/seo-${route.replaceAll('/','-')}${width}.png`,fullPage:true});
      await page.close();
    }await context.close();
  }
  for(const href of links){const response=await fetch(new URL(href,base));assert.equal(response.status,200,'Broken link '+href);}
  const changed=execFileSync('git',['diff','--name-only'],{encoding:'utf8'}).trim().split(/\r?\n/);
  for(const p of changed)assert.ok(!/^(en\/|index.html$|src\/components\/|work\/(kinetik|torque|caravela)\/|public\/CNAME)/.test(p),'Protected file changed '+p);
  console.log(`PASS: 28 no-JS page/viewport checks; ${links.size} internal URLs; metadata, JSON-LD, sitemap, captions, desktop CTA and protected files.`);
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exit(1)});
