const express = require('express');
const app = express();
const cors = require('cors');
const { fork } = require('child_process');

console.log("application!!!!!!!");
app.use(express.json());
app.use(cors());
app.use('/user', require('./users/user.routes'));
app.use('/properties', require('./properties/properties.routes'));
app.use('/scrapedData', require('./scraped-properties/scraped-properties.routes'));
app.get('*', (req,res) => {
  res.send("Hello World");
})
require('../server/config/mongoConfig');

const childProcess = fork('./libs/cronjob.js');
childProcess.on('message', (message) => {
  console.log('Child process message: ', message);
});
childProcess.on(
  'exit', (code) => {
  console.log(`Child process exited with code ${code}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
