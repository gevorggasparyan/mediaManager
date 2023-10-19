const mongoose = require('mongoose');

const tumblrAccountSchema = new mongoose.Schema({
    name: String,
    accountUrl: String,
    userId: String,
    propertyId: String,
    status: String
},{
    collection: 'tumblrAccount'
});

module.exports = mongoose.model('Tumblr', tumblrAccountSchema);