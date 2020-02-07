var express = require('express');
var router = express.Router();
var routesConfig = require('./config');
const apiAdapter = require('./api.adapter');

const api = apiAdapter(routesConfig['party-manager']);

router.get('/', isAuthorized, (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.delete('/', isAuthorized, (req, res) => {
  api.delete(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post('invite', isAuthorized, (req, res) => {
  api.post(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post('user/join', isAuthorized, (req, res) => {
  api.post(req.path).then(resp => {
    res.send(resp.data);
  });
});

router.post('invite', isAuthorized, (req, res) => {
  api.post(req.path).then(resp => {
    res.send(resp.data);
  });
});
