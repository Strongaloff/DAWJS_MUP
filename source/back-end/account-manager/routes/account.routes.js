var express = require('express');
var controller = require('../controllers/accountController');
var router = express.Router();

router.post('/register', controller.register);

router.post('/login', controller.login);

router.get('/password/:email', controller.forgotPasswordByEmail);

router.get('/user/:id', controller.getById);

router.get('/user/:username', controller.getByUsername);

module.exports = router;
