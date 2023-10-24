const scrapedPropertiesService = require('./scraped-properties.service');

exports.addScrapedProperties = async (req, res) => {
    try {
        const { accountType , userName, accountUrl, propertyId } = req.body;
        const newScrapedData = await scrapedPropertiesService.addScrapedProperties(accountType, userName, accountUrl, propertyId);

        res.status(201).json({ message: "Scraped properties added: ", newScrapedData });
    } catch (err) {
        res.status(500).json({ error: "Unable to get Properties" })
    }
}