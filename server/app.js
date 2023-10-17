const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.use('/tumblr', require('./routes/tumblrRoutes'));
require('../server/config/mongoConfig')

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
