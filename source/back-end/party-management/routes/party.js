var express = require("express");
var router = express.Router();
var partyController = require("../controllers/partyController");
var userController = require("../controllers/userController");

router.post("/", partyController.createParty);

router.post("user/join", userController.joinParty);

router.post("invite", userController.inviteUser);

router.get("/", partyController.getInviteCode);

router.delete("/", partyController.getInviteCode);

module.exports = router;
