const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    email: String,
    password: String,
    propertyType: { type: String, required: true },
    status: { type: String, default: 'unstarted' },
    userId: String
},{
    collection: 'properties'
});

module.exports = mongoose.model('Property', PropertySchema);