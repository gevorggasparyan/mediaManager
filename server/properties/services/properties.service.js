const Property = require('../models/properties.model');

exports.addCredentials = async ({ email, password }) => {
    const tumblrCredential = new Property({
        email,
        password
    });
    return tumblrCredential.save();
}