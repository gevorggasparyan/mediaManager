const Property = require('../models/properties.model');
const bcrypt = require("bcrypt");

exports.addProperty = async ({ email, password, userId, status }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const tumblrCredential = new Property({
        email,
        password: hashedPassword,
        userId, //from token
        status
      //  status: //unstarted -> in-progress -> completed
    });
    return tumblrCredential.save();
}

exports.getAllProperties = async (query) => {
    return Property.find(query);
}