const User = require('../models/userPropertyModel');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();

exports.getAllUsers = async () => {
    return User.find({}, {password: 0});
}
