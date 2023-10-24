const Property = require('./properties.model');

exports.addProperty = async ({ email, password, accountType, userId }) => {
    // const hashedPassword = await bcrypt.hash(password, 10);
    const tumblrCredential = new Property({
        email,
        password,
        accountType,
        status:"unstarted",
        userId, //from token
        //  status: //unstarted -> in-progress -> completed
    });

    return tumblrCredential.save();
}

exports.getAllProperties = async (query) => {
    return Property.find(query);
}

exports.updatePropertyStatus = async (propertyId, newStatus) => {
    try {
        return await Property.findByIdAndUpdate(
            propertyId,
            {status: newStatus},
            {new: true}
        );
    } catch (err) {
        throw err;
    }
}