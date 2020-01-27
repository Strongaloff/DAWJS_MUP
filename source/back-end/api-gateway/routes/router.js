var express = require('express');
var router = express.Router();

var accountRouter = require('./account-manager.routes');
// var feedRouter = require('./feedService')
// var hashtagRouter = require('./hashtagService')
// var authRouter = require('../controller/AuthController')

router.use((req, res, next) => {
  console.log('Called: ', req.path);
  next();
});

router.use(accountRouter);

module.exports = router;
