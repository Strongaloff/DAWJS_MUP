var express = require("express");
var router = express.Router();

var controller;

router.post("/register", controller);

router.post("/login", controller);

router.get("/password/:email", controller);

router.get("/user/:id", controller);

router.get("user/:name", controller);

module.exports(router);
