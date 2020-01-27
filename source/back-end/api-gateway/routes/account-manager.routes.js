var express = require('express');
var router = express.Router();
const apiAdapter = require('./api.adapter');
// const isAuthorized = require('../controller/requestAuthenticator')

const BASE_URL = 'http://localhost:8001';
const api = apiAdapter(BASE_URL);

// router.get('/register', isAuthorized, (req, res) => {
//   api.get(req.path).then(resp => {
//     res.send(resp.data);
//   });
// });

router.get('/password/:email', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get('/user/:id', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.get('/user/:username', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

module.exports = router;
