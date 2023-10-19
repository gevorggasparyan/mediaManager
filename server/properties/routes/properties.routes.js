const express = require('express');
const router = express.Router();
const propertyControllers = require('../controllers/properties.controller');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');
const tumblrControllers = require('../controllers/tumblr.controller');

router.post('/addCredentials', jwtMiddleware, propertyControllers.addCredentials);
// router.post('/loginAndScrapeTumblr', jwtMiddleware, tumblrControllers.loginAndScrapeTumblr);
router.get('/allProperties', jwtMiddleware, propertyControllers.getAllProperties);
module.exports = router;