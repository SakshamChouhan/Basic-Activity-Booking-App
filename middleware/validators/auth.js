const { body } = require('express-validator');

exports.registerValidator = [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
  body('phone').notEmpty().withMessage('Phone required'),
  body('password').isLength({ min: 6 }).withMessage('Password min 6 chars'),
];

exports.loginValidator = [
  body('email').isEmail().withMessage('Enter valid email'),
  body('password').notEmpty().withMessage('Password required'),
];