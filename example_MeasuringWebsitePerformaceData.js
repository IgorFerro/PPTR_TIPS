const puppeteer = require("puppeteer");

(async () =>{
//Measuring Website Performace Data
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();

await page.goto('https://pptr.dev');
await page.waitForSelector('title');

// Execute Navigation API within the page context
const metrics = await page.evaluate(() => JSON.stringify(window.performance));
console.log(JSON.parse(metrics));
await browser.close();
})();