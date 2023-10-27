const {firefox} = require('playwright');

async function scrapeTumblrAccountUrl(email, password) {
  const browser = await firefox.launch({headless: false});
  const page = await browser.newPage();

  // const decryptedPass = decryption...
  try {
    await page.goto('https://www.tumblr.com/login');
    console.log('went to browser');
    await page.fill('input[name="email"]', email);
    await page.fill('input[name="password"]', password); // decryptedPass
    console.log('properties inputted');
    await page.click('button[type="submit"]');

    await page.click('.UyyJb');
    const blogProperties = await page.$$eval('.wmRou', (links) =>
      links.map((link) => {
        const href = link.getAttribute('href');
        const username = href.split('/blog/')[1];
        return {
          userName: username,
          href: `https://www.tumblr.com${href}`,
        };
      }),
    );

    console.log('blog properties: ', blogProperties);
    return blogProperties;
  } catch (error) {
    console.error('An error occurred:', error);
    return null;
  } finally {
    await browser.close();
  }
}

module.exports = scrapeTumblrAccountUrl;

