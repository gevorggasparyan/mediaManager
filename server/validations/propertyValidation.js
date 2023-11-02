const { body } = require('express-validator');

const propertyValidation = [
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password')
    .isString()
    .withMessage('Password must be a string'),
  body('accountType')
    .notEmpty()
    .withMessage('Input the account type')
];

module.exports = propertyValidation;
