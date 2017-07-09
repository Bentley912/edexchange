var express = require("express");

var edController = require("../controllers/edController");

var router = new express.Router();

router.post("/edProfile", edController.edcreate);

module.exports = router;