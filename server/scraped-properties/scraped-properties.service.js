const accountModel = require('./scraped-properties.model');

exports.addScrapedProperties = async (accountType, userName, accountUrl, propertyId) => {
  const scrapedProperties = new accountModel({
    accountType,
    userName,
    accountUrl,
    propertyId,
  });

  console.log('scraped data:', scrapedProperties);
  return scrapedProperties.save();
};

exports.getAllScrapedProperties = async (query) => {
  return accountModel.find(query);
};
