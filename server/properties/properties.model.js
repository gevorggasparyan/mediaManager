const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {
    iv: String, // field for the IV
    encryptedData: {type: String, required: true} // field for the encrypted pass
  },
  accountType: {type: String, required: true}, // tumblr, google, etc.
  status: {type: String, default: 'unstarted'},
  userId: String,
}, {
  collection: 'properties',
});

module.exports = mongoose.model('Property', PropertySchema);
