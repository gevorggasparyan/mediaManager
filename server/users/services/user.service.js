const User = require('../../properties/models/properties.model');
const bcrypt = require("bcrypt");
const dotenv = require('dotenv');
dotenv.config();

exports.getAllUsers = async () => {
    return User.find({}, {password: 0});
}
