const express = require('express');
const app = express();

app.use(express.json());
app.use('/user', require('./users/user.routes'));
app.use('/properties', require('./properties/properties.routes'));
require('../server/config/mongoConfig')

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
