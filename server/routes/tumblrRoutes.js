const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/getProperties');
router.post('/addProperties');
router.post('/login', userController.login);
router.post('registration', userController.createUser);

module.exports = router;