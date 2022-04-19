const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({headless: false, args: [
    '--no-sandbox']});
  const page = await browser.newPage();

  while (true) {
    try {
      await page.goto("https://hitomi.la/", {waitUntil: "networkidle2"});
      break;
    } catch (e) {
      console.log(e);
    }
  }

  page.on("console", async (msg) => {
    const msgArgs = msg.args();
    for (let i = 0; i < msgArgs.length; ++i) {
      var f = fs.openSync(`${i}.txt`, "w");
      fs.writeSync(f, await msgArgs[i].jsonValue());
    }
  });

  await page.evaluate(() => {
    var r = "";
    for (var i = 0; i < 4096; i++) {
      r += gg.m(i).toString();
      r += ",";
    }
    console.log(r, gg.b);
  });

  await browser.close();
})();
