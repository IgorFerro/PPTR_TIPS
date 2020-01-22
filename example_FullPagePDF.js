const puppeteer = require("puppeteer");

//Generate Full Page PDF

(async () =>{
    //Convert page into PDF file
 const browser = await puppeteer.launch();
 const page = await browser.newPage();
 await page.goto("https://www.example.com", {waitUntil: "networkidle0"});
 await page.pdf({path: "example.pdf", format:"A4"});
 await browser.close();
})();