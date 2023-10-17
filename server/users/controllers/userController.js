const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../../properties/models/PropertyModel');
const userService = require('../services/userService');
const playwright = require('playwright');
