var express = require("express");

var authController = require("../controllers/authController");

var router = new express.Router();

router.post("/signup", authController.create);

module.exports = router;