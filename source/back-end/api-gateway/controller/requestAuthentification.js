var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = (req, res, next) => {
  if (req.headers['authorization'] === undefined) {
    res.status(401).send('Forbidden');
  }
  jwt.verify(req.headers['authorization'], config.secret, (err, decoded) => {
    if (err) {
      res.status(403).send('Forbidden');
    } else {
      next();
    }
  });
};
