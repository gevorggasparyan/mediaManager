const express = require('express');
const router = express.Router();
const propertyControllers = require('../controllers/properties.controller');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');

router.post('/addCredentials', jwtMiddleware, propertyControllers.addCredentials);
router.get('/allProperties', jwtMiddleware, propertyControllers.getAllProperties);

module.exports = router;