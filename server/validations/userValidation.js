const { body } = require('express-validator');

const userValidation = [
  body('username')
    .matches(/^[A-Za-z]/)
    .withMessage('Username must start with letter'),
  body('email')
    .isEmail()
    .withMessage('Invalid email format'),
  body('password')
    .isString()
    .withMessage('Password must be a string')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).*$/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character')

];

module.exports = userValidation;
