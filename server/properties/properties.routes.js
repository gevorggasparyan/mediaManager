const express = require('express');
/* eslint-disable new-cap */
const router = express.Router();
/* eslint-enable new-cap */
const propertyControllers = require('./properties.controller');
const jwtMiddleware = require('../middlewares/jwtMiddleware');
const emailValidation = require('../validations/emailValidation');

router.post('/addProperty', emailValidation, jwtMiddleware, propertyControllers.addProperty);
router.get('/allProperties', propertyControllers.getAllProperties);
router.get('/allPropertiesByUser', jwtMiddleware, propertyControllers.getAllPropertiesByUser);
router.patch('/updateStatus/:propertyId', propertyControllers.updatePropertyStatus);

module.exports = router;
