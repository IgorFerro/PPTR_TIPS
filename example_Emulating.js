const puppeteer = require("puppeteer");
const devices = require('puppeteer/DeviceDescriptors');

//Emulating devices

(async () =>{
const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.emulate(devices["iPhone X"]);
await page.goto("https://pptr.dev");
await page.waitFor(10000);
await browser.close();
})();