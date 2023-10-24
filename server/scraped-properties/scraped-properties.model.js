const mongoose = require('mongoose');

const scrapedPropertySchema = new mongoose.Schema({
    accountType: String,
    name: String,
    accountUrl: String,
    //userId: String, //from token
    propertyId: String//reference to properties
},{
    collection: 'scrapedProperty'
});

module.exports = mongoose.model('scrapedProperty', scrapedPropertySchema);