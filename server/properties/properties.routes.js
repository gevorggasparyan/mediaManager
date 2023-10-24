const express = require('express');
const router = express.Router();
const propertyControllers = require('./properties.controller');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router.post('/addProperty', jwtMiddleware, propertyControllers.addProperty);
router.get('/allProperties', propertyControllers.getAllProperties);
router.patch('/updateStatus/:propertyId', propertyControllers.updatePropertyStatus);

module.exports = router;