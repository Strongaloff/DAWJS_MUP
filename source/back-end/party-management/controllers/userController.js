var userService = require("../services/userServices");

exports.joinParty = (req, res) => {
  userService.joinUser(
    req.query.user_id,
    req.query.invitation_code,
    (result => {
      res.send(result);
    }).bind(res)
  );
};
