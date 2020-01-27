var db = require('../database/account-db');

exports.register = (req, res) => {
  accountObj = req.body;

  db.create(accountObj).then(resp => {
    res.send('success');
  });
  // res.send('register ok');
};

exports.login = (req, res) => {
  return 'login';
};

exports.forgotPasswordByEmail = (req, res) => {
  db.getByEmail(req.params.email).then(account => {
    res.send(account);
  });
};

exports.getById = (req, res) => {
  db.getById(req.paras.id).then(account => {
    res.send(account);
  });
};

exports.getByUsername = (req, res) => {
  db.getByUsername(req.params.username).then(account => {
    res.send(account);
  });
};
