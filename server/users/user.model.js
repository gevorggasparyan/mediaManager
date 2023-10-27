const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  isActivated: {type: Boolean, default: false},
  activationLink: String,
}, {
  collection: 'users',
});

module.exports = mongoose.model('User', userSchema);
