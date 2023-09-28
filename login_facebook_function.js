
const puppeteer = require('puppeteer');
const email =  (' your email ');
const password =  (' your password ');

async function loginFacebook(email, password) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://www.facebook.com/');

    await page.waitForSelector('input[name="email"]', { visible: true });
    await page.type('input[name="email"]', email);

    await page.waitForSelector('input[name="pass"]', { visible: true });
    await page.type('input[name="pass"]', password);

    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle2' }),
        page.click('button[name="login"]'),
    ]);

    // Logged in successfully
    console.log('Logged in to Facebook');

    // Close the browser
    await browser.close();
}