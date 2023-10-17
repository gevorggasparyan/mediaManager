const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/getProperties');
router.post('/addProperties');
router.post('/login');
router.post('registration');

module.exports = router;