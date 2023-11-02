const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  // password: {type: String, required: true},
  password: {
    iv: String, // field for the IV
    encryptedData: {type: String, required: true} // field for the encrypted pass
  },
  email: {type: String, required: true},
  isActivated: {type: Boolean, default: false},
  activationLink: String,
}, {
  collection: 'users',
});

module.exports = mongoose.model('User', userSchema);
