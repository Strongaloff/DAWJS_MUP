var db = require("../database/account-db");

exports.register = (req, res) => {
  accountObj = req.body;
  console.log(req.body);
  db.create(accountObj).then(resp => {
    res.send("success");
  });
};

exports.login = (req, res) => {
  db.login(req.body).then(result => {
    console.log(result);
    if (result === null) {
      res.status(404).send("not ok");
    } else {
      res.status(200).send("ok");
    }
  });
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
