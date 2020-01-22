const puppeteer = require("puppeteer");

(async () =>{
//Faking Geolocation

const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();

//Grant permissions for geolocation change
const context = browser.defaultBrowserContext();
await context.overridePermissions('https://pptr.dev', ['geolocation']);

await page.goto('https://pptr.dev');
await page.waitForSelector('title');

//chage geolocation to north pole
await page.setGeolocation({latitude:90,longitude: 0});

await browser.close();
})();