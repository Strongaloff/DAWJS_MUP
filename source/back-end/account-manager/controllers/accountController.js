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
    if (result !== null) {
      res.send("successfull login");
    } else {
      res.status(500).send("Not existent user");
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
