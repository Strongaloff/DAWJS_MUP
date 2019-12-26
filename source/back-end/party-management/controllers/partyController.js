var partyService = require("../services/partyServices");

exports.createParty = (req, res) => {
  partyService.add(
    req.query.party_name,
    req.query.host_name,
    (result => {
      res.send(result.obj);
    }).bind(res)
  );
};

exports.deleteParty = (req, res) => {
  console.log(req.query.party_name);
};

exports.getInviteCode = (req, res) => {
  partyService.getInviteCode(
    req.query.party_name,
    (result => {
      res.send(result.obj);
    }).bind(res)
  );
};
