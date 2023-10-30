const scrapedPropertiesService = require('./scraped-properties.service');

exports.addScrapedProperties = async (req, res) => {
  try {
    const {accountType, userName, accountUrl, propertyId} = req.body;
    const newScrapedData = await scrapedPropertiesService.addScrapedProperties(accountType, userName, accountUrl, propertyId);

    res.status(201).json({message: 'Scraped properties added: ', newScrapedData});
  } catch (err) {
    res.status(500).json({error: 'Unable to get Properties'});
  }
};

exports.getScrapedPropertiesByPropertyId = async (req, res) => {
  try {
    const { propertyId } = req.params;
    console.log("prop ID:",propertyId);
    const scrapedProperties = await scrapedPropertiesService.getScrapedPropertiesByPropertyId(propertyId);

    res.status(200).json({ scrapedProperties });
  } catch (err) {
    res.status(500).json({ error: 'Unable to get properties by propertyId' });
  }
};
