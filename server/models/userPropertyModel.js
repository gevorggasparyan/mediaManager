const mongoose = require('mongoose');

const userPropertySchema = new mongoose.Schema({
    name: String,
    tumblrUrl: String
});

module.exports = mongoose.model('Property', userPropertySchema);