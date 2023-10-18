const express = require('express');
const router = express.Router();
const propertyControllers = require('../controllers/properties.controller');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');

router.get('/allProperties', jwtMiddleware,);
router.post('/addCredentials', jwtMiddleware, propertyControllers.addCredentials);

module.exports = router;