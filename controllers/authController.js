var db = require("../models");
var passport = require("../config/passport");


module.exports = {
    create: function(req,res){
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
    //   res.redirect(307, "/api/login");
    console.log("User Created!")
    }).catch(function(err) {
      res.json(err);
    });
    }
}