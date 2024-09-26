var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController');
const authValidator = require('../validators/authValidator');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/users', function(req, res, next) {
    res.send('respond with a resource');
});

/**Auth API */
router.post('/auth/register', authValidator.register, authValidator.handleErrors, authController.register);
router.post('/auth/login', authValidator.login, authValidator.handleErrors, authController.login);
router.post('/auth/verify-code', authValidator.verifyCode, authValidator.handleErrors, authController.verifyCode);

module.exports = router;
