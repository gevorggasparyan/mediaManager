const cron = require('node-cron');
const axios = require('axios');

const startScrapingCron = () => {
    cron.schedule('*/5 * * * * *', async () => {
        try {
            const criteria = {
                status: 'unstarted', // or any other criteria you need
            };
            const response = await axios.get('http://localhost:3000/credentials/allProperties?' + new URLSearchParams(criteria), {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if (response.status === 200) {
                const properties = response.data;
                for (const property of properties) {
                    //status checking and scraping if needed
                }
            }
        } catch (error) {
            console.error('Cron job error:', error);
        }
    });
};

module.exports = startScrapingCron;
