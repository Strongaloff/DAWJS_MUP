var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const apiAdapter = require('../routes/api.adapter');
const BASE_URL = 'http://localhost:8002';
const api = apiAdapter(BASE_URL);
const config = require('../config');

exports.register = (req, res) => {
  api.post(req.path, req.body).then(resp => {
    if (resp.status !== 200) {
      res.status(500).send('registration failed');
    }

    let token = jwt.sign({ id: req.body.username }, config.secret, {
      expiresIn: 86400
    });

    res.status(200).send({ auth: true, token: token });
  });
};

exports.login = (req, res) => {
  api.post(req.path, req.body).then(resp => {
    console.log("workds");
    if (resp.status !== 200) {
      res.status(500).send('invalid credetials');
    }
    var token = jwt.sign({ id: req.body.username }, config.secret, { expiresIn: 86400 });

    res.status(200).send({ auth: true, token: token });
  });
};
