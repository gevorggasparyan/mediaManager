const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/user', require('./users/user.routes'));
app.use('/properties', require('./properties/properties.routes'));
app.use('/scrapedData', require('./scraped-properties/scraped-properties.routes'));
require('../server/config/mongoConfig');

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
