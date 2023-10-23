const express = require('express');
const router = express.Router();
const userController = require('./user.controller');

router.post('/login', userController.login);
router.post('/registration', userController.register);
router.get('/activate/:activationToken', userController.activation);

module.exports = router;