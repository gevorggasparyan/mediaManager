const mongoose = require('mongoose');

const scrapedPropertySchema = new mongoose.Schema({
  accountType: String,
  userName: String,
  accountUrl: String,
  propertyId: mongoose.Types.ObjectId, // reference to properties OR mongoose.ObjectId
}, {
  collection: 'scrapedProperty',
});

module.exports = mongoose.model('scrapedProperty', scrapedPropertySchema);
