var express = require('express');
var controller = require('../controllers/partyController');
var router = express.Router();

router.post('/', controller.createParty);

router.get("/invite", controller.getInviteCode);

router.get("/users", controller.getAllUsers)

router.post("/join", controller.joinUser);

module.exports = router;
