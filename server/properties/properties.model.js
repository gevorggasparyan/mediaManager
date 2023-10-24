const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    email: String,
    password: String,
    accountType: { type: String, required: true }, //tumblr, google e.t.c.
    status: { type: String, default: 'unstarted' },
    userId: String
},{
    collection: 'properties'
});

module.exports = mongoose.model('Property', PropertySchema);