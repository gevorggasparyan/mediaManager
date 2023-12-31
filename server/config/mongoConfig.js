const mongoose = require('mongoose');

mongoose.connect('mongodb://mongodb:27017/mediaManagerProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

module.exports = mongoose.connection;
