const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    name: String,
    tumblrUrl: String
});

module.exports = mongoose.model('Property', PropertySchema);