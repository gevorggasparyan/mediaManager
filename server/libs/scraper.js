const { chromium } = require('playwright');

async function scrapeTumblrAccountUrl(email, password) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {

        await page.goto('https://www.tumblr.com/login');

        await page.fill('input[name="email"]', email);
        await page.fill('input[name="password"]', password);
        console.log("inputted")
        await page.click('button[type="submit"]');

        await page.click('.UyyJb');
        const blogURLs = await page.$$eval('.wmRou', links =>
            links.map(link => {
                const href = link.getAttribute('href');
                const username = href.split('/blog/')[1];
                return {
                    username,
                    href: `https://www.tumblr.com${href}`,
                };
            })
        );

        const blogNames = blogURLs.map(blog => blog.username);

        console.log("urls: ", blogURLs);
        console.log("names: ", blogNames);
        return blogURLs;
    } catch (error) {
        console.error('An error occurred:', error);
        return null;
    } finally {
        await browser.close();
    }
}

module.exports = scrapeTumblrAccountUrl;