var express = require("express");

var edController = require("../controllers/edController");

var router = new express.Router();

router.post("/edProfile", edController.edcreate);
router.get("/profile", edController.edProfile);
router.post("/edRequest", edController.edRequest);

module.exports = router;