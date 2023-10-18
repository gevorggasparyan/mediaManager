const Property = require('../models/properties.model');
const bcrypt = require("bcrypt");

exports.addCredentials = async ({ email, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const tumblrCredential = new Property({
        email,
        password: hashedPassword
    });
    console.log("hash pass",hashedPassword)
    return tumblrCredential.save();
}