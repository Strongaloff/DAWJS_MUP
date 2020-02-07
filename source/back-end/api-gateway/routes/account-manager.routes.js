var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const isAuthorized = require('../controller/requestAuthentification');

var authController = require('../controller/authController');
const apiAdapter = require('./api.adapter');
const BASE_URL = 'http://localhost:8002';
const api = apiAdapter(BASE_URL);

// router.get('/register', isAuthorized, (req, res) => {
//   api.get(req.path).then(resp => {
//     res.send(resp.data);
//   });
// });
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/register', authController.register);

router.get('/login', authController.login);

router.get('/password/:email', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get('/user/:id', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get('/user/:username', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
