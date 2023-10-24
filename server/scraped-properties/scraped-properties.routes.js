const express = require('express');
const router = express.Router();
const scrapedPropertiesController = require('./scraped-properties.controller');

router.post('/addScrapedData', scrapedPropertiesController.addScrapedProperties);

module.exports = router;