const cron = require('node-cron');
const axios = require('axios');
const scraping = require('../libs/scraper');

const startScrapingCron = () => {
    cron.schedule('*/5 * * * * *', async () => {
        try {
            const response = await axios.get('http://localhost:3000/properties/allProperties', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (response.status === 200) {
                const properties = response.data;

                console.log("props: ",properties)
                for (const property of properties) {
                    //status checking and scraping
                    if(property.status === "unstarted") {
                        await scraping(property.email, property.password);
                    }
                }
            }
        } catch (error) {
            console.error('Cron job error:', error);
        }
    });
};

module.exports = startScrapingCron;
