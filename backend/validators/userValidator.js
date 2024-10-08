const { body, validationResult } = require('express-validator');

const userCreateValidator = [
  body('name')
    .isString().withMessage('Tên phải là một chuỗi')
    .isLength({ min: 2 }).withMessage('Tên phải có từ 2 ký tự'),

  body('email')
    .isEmail().withMessage('Email không hợp lệ'),

  body('password')
    .isString().withMessage('Mật khẩu phải là một chuỗi')
    .isLength({ min: 6 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
];

const userLoginValidator = [
  body('email')
    .isEmail().withMessage('Email không hợp lệ'),

  body('password')
    .isString().withMessage('Mật khẩu phải là một chuỗi')
    .isLength({ min: 6 }).withMessage('Mật khẩu phải có ít nhất 6 ký tự')
];

const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  userLoginValidator,
  userCreateValidator,
  handleValidationErrors
};