const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */
const userController = require('./user.controller');
const passwordValidation = require('../validations/passwordValidation');

router.post('/login', userController.login);
router.post('/registration', passwordValidation, userController.register);
router.get('/activate/:activationToken', userController.activation);

module.exports = router;
