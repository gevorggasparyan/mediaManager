const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    accountType: String,
    name: String,
    accountUrl: String,
    userId: String, //from token
    propertyId: String, //to take property type
    status: String
},{
    collection: 'account'
});

module.exports = mongoose.model('Account', accountSchema);