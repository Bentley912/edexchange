var express = require("express");
var path = require("path");

var profileRoutes = require("./profileRoutes");

var router = new express.Router();

// Use the apiRoutes module for any routes starting with "/api"
router.use("/api", profileRoutes);

module.exports = router;