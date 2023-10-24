const cron = require('node-cron');
const axios = require('axios');
const scraping = require('../libs/scraper');
const express = require('express')

const startScrapingCron = (req, res) => {
    console.log("CRON")
    cron.schedule('*/5 * * * * *', async () => {
        try {
            const response = await axios.get('http://localhost:3000/properties/allProperties');

            console.log("CRONJOB WORKING")

            if (response.status === 200) {
                const properties = response.data;

                console.log("props: ",properties)
                for (const property of properties) {

                    //status checking and scraping
                    if (property.status === "unstarted") {
                        //property status changing with axios patch
                        //change to "in progress" status
                        const changeStatusInProgress = await axios.patch(`http://localhost:3000/properties/updateStatus/${property._id}`,{
                            status: "In progress"
                        });

                        const scrapedData = await scraping(property.email, property.password);

                        for (const blogProperty of scrapedData) {
                            const response = await axios.post('http://localhost:3000/scrapedData/addScrapedData', {
                                accountType: property.accountType,
                                userName: blogProperty.username,
                                accountUrl: blogProperty.href,
                                propertyId: property._id
                            });

                            console.log("Response: ", response)
                        }
                    }

                    //change to "completed" status
                    if (property.status === "In progress") {
                        const changeStatusComplete = await axios.patch(`http://localhost:3000/properties/updateStatus/${property._id}`, {
                            status: "Completed"
                        });
                    }
                }
            }
        } catch (error) {
            console.error('Cron job error:', error);
        }
    });
};

startScrapingCron();
