const { validationResult, body } = require('express-validator');

const validateEmail = (req, res, next) => {
  body('email')
    .isEmail()
    .withMessage('Invalid email address')
    .bail()
    .custom((value, { req }) => {
      if (!value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        throw new Error('Invalid email address');
      }
      return true;
    })(req, res, next);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: "Input Valid Email"});
  }

  next();
};

module.exports = validateEmail;
