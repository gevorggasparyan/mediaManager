const Property = require('./properties.model');
const {encrypt} = require('../libs/crypting');

// exports.addProperty = async ({ email, password, accountType, userId }) => {
//     const hashedPass = encrypt(password);
//     const tumblrCredential = new Property({
//         email,
//         password: hashedPass.encryptedData,
//         accountType,
//         status:'unstarted',
//         userId, //from token
//     });
//
//     return tumblrCredential.save();
// }

exports.addProperty = async ({email, password, accountType, userId}) => {
  const {iv, encryptedData} = encrypt(password); // Generate IV during encryption
  const tumblrCredential = new Property({
    email,
    password: {
      iv, // Store the IV
      encryptedData, // Store the encrypted data
    },
    accountType,
    status: 'unstarted',
    userId, // from token
  });

  return tumblrCredential.save();
};

exports.getAllProperties = async (query) => {
  return Property.find(query);
};

exports.updatePropertyStatus = async (propertyId, newStatus) => {
  try {
    return await Property.findByIdAndUpdate(
      propertyId,
      {status: newStatus},
      {new: true},
    );
  } catch (err) {
    throw err;
  }
};
