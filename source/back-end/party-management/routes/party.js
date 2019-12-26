var express = require("express");
var router = express.Router();
var partyController = require("../controllers/partyController");
var userController = require("../controllers/userController");
router.post("/", partyController.createParty);

router.post("/join", userController.joinParty);

router.get("/", partyController.getInviteCode);

router.delete("/", partyController.getInviteCode);

module.exports = router;
