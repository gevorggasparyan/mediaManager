const express = require('express');
const app = express();

app.use(express.json());

app.use('/tumblr', require('./users/routes/userRoutes'));
require('../server/config/mongoConfig')

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
