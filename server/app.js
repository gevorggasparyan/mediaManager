const express = require('express');
const app = express();

app.use(express.json());
app.use('/user', require('./users/routes/user.routes'));
require('../server/config/mongoConfig')

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
