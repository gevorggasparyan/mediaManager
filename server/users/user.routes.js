const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */
const userController = require('./user.controller');
const userValidation = require('../validations/userValidation');

router.post('/login', userController.login);
router.post('/registration', userValidation, userController.register);
router.get('/activate/:activationToken', userController.activation);

module.exports = router;
