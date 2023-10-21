const cron = require('node-cron');
const axios = require('axios');

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
                for (const property of properties) {
                    //status checking and scraping
                }
            }
        } catch (error) {
            console.error('Cron job error:', error);
        }
    });
};

module.exports = startScrapingCron;
