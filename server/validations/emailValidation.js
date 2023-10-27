const { body, validationResult } = require('express-validator');

const emailValidation = {
   isEmail: [ body('email').isEmail()
  .withMessage('Invalid email format')
  .normalizeEmail() ]
};

module.exports = emailValidation;
