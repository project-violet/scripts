const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setRequestInterception(true);
  page.on("request", (request) => {
    if (request.isInterceptResolutionHandled()) return;

    // Override headers
    console.log(request.url());
    console.log(request.headers());
    
    request.continue();
  });

  await page.goto("https://hitomi.la/galleries/2103977.html");

  await browser.close();
})();
