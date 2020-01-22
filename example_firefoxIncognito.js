const puppeteer = require('puppeteer-firefox');

    //FireFox Incognito Page Test
(async () => {
    const browser = await puppeteer.launch({headless: false});
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();

     await page.goto('http://zero.webappsecurity.com/');
     await page.waitForSelector('#signin_button');
     await page.waitFor(5000);
     await browser.close();
})();