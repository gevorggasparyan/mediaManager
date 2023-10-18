const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/login', userController.login);
router.post('/registration', userController.register);
router.post('/loginTumblr');
router.get('/activate/:activationToken', userController.activation);

module.exports = router;