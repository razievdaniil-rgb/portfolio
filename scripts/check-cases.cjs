const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const base = process.env.CASE_TEST_URL || 'http://127.0.0.1:4175/';
(async () => {
  const browser = await chromium.launch({channel:'chrome',headless:true});
  try {
    for (const width of [390,1440]) {
      const page = await browser.newPage({viewport:{width,height:960}});
      const errors=[]; page.on('pageerror',e=>errors.push(e.message));
      for (const route of ['', 'work/', 'work/rfzavod/', 'work/fitdiary/', 'work/training-log/', 'work/learnjs/', 'work/kinetik/', 'work/torque/', 'work/caravela/', 'en/work/', 'en/work/fitdiary/']) {
        const response=await page.goto(base+route);
        assert.equal(response.status(),200,route);
        await page.locator('h1').waitFor();
        await page.locator('img').evaluateAll(imgs=>Promise.all(imgs.map(img=>{img.loading='eager';return img.decode().catch(()=>{throw new Error('Image failed: '+img.src)})})));
        const overflow=await page.evaluate(()=>[...document.querySelectorAll('body *')].filter(el=>el.getBoundingClientRect().right>innerWidth+1 && getComputedStyle(el).position!=='fixed').slice(0,12).map(el=>({tag:el.tagName,cls:el.className,right:el.getBoundingClientRect().right})));
        assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`Overflow: ${route} / ${width}: ${JSON.stringify(overflow)}`);
        if(route==='work/fitdiary/') await page.screenshot({path:`C:/Users/Daniil/tmp/portfolio-fitdiary-${width}.png`,fullPage:true});
        if(route==='work/') await page.screenshot({path:`C:/Users/Daniil/tmp/portfolio-work-${width}.png`,fullPage:true});
      }
      assert.deepEqual(errors,[]); await page.close();
    }
    console.log('PASS: 22 page/viewport checks; images loaded; no horizontal overflow or page errors.');
  } finally { await browser.close(); }
})().catch(e=>{console.error(e);process.exit(1)});
