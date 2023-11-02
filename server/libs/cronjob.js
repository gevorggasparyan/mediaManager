const cron = require('node-cron');
const axios = require('axios');
const scraping = require('../libs/scraper');
const {decrypt} = require('./crypting');

const startScrapingCron = () => {
  console.log('CRON');
  cron.schedule('*/5 * * * * *', async () => {
    try {
      console.log('CRON started');
      const response = await axios.get('http://localhost:3000/properties/allProperties');

      console.log('CRONJOB WORKING');

      if (response.status === 200) {
        const properties = response.data;

        for (const property of properties) {
          if (property.status === 'unstarted') {
            console.log('checking for unstarted');
            const changeStatusInProgress = await axios.patch(`http://localhost:3000/properties/updateStatus/${property._id}`, {
              status: 'In progress',
            });

            console.log('decrypt start');

            console.log('property pass:', property.password.encryptedData);
            console.log('property iv:', property.password.iv);

            const originalPassword = decrypt(property.password.encryptedData, property.password.iv);
            console.log('decrypt finish');
            console.log('password', originalPassword);
            const scrapedData = await scraping(property.email, originalPassword);

            for (const blogProperty of scrapedData) {
              console.log('blog name:', blogProperty.userName);
              const response = await axios.post('http://localhost:3000/scrapedData/addScrapedData', {
                accountType: property.accountType,
                userName: blogProperty.userName,
                accountUrl: blogProperty.href,
                propertyId: property._id,
              });

              console.log('Response: ', response.data);
            }
          }

          if (property.status === 'In progress') {
            const changeStatusComplete = await axios.patch(`http://localhost:3000/properties/updateStatus/${property._id}`, {
              status: 'Completed',
            });
          }
        }
      }
    } catch (error) {
      console.error('Cron job error:', error);
    }
  });
};

// module.exports = startScrapingCron;
startScrapingCron();
