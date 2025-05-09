const express = require('express');
const { register, login } = require('../controllers/authController');
const { registerValidator, loginValidator } = require('../middleware/validators/auth');
const { validationResult } = require('express-validator');

const router = express.Router();

router.post('/register', registerValidator, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  next();
}, register);

router.post('/login', loginValidator, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });
  next();
}, login);

module.exports = router;