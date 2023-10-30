const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */
const scrapedPropertiesController = require('./scraped-properties.controller');

router.post('/addScrapedData', scrapedPropertiesController.addScrapedProperties);
router.get('/allScrapedData/:propertyId', scrapedPropertiesController.getScrapedPropertiesByPropertyId);

module.exports = router;
