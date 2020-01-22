const puppeteer = require("puppeteer");

//Generate Full Page Screenshot

(async () =>{
const browser = await puppeteer.launch();
const page = await browser.newPage()
await page.goto("https://www.example.com", {waitUntil:"networkidle0"});
await page.screenshot({path:"example.png", fullPage: true});
await browser.close();
})();