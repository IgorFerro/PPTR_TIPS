const puppeteer = require("puppeteer");

(async () =>{
//Accessibily Test
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();

await page.goto('https://pptr.dev');
await page.waitForSelector('title');

const snapshot = await page.accessibility.snapshot();
console.log(snapshot);
await browser.close();
})();