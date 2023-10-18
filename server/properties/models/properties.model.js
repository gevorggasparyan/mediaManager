const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    email: String,
    password: String
},{
    collection: 'properties'
});

module.exports = mongoose.model('Property', PropertySchema);