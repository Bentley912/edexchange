var express = require("express");
var authController = require("../controllers/authController");
var passport = require("../config/passport");
var router = new express.Router();

router.post("/signup", authController.create);
router.post("/login", passport.authenticate("local"), authController.login);
router.get("/user_data", authController.userData);

module.exports = router;