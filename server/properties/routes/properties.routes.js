const express = require('express');
const router = express.Router();
const propertyControllers = require('../controllers/properties.controller');
const jwtMiddleware = require('../../middlewares/jwtMiddleware');

router.get('/allProperties');
router.post('/addCredentials',jwtMiddleware);