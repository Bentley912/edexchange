var db = require("../models");
var passport = require("../config/passport");


module.exports = {
    create: function(req,res){
      console.log(req.body);
      db.User.create({
        email: req.body.email,
        password: req.body.password
      }).then(function() {
      // res.redirect(307, "/api/login");
      console.log("User Created!") 
      }).catch(function(err) {
        console.log(err);
        res.send("Worked");
      });
    },

    login: function(req,res){
      res.redirect("/member");
    },

    userData: function(req,res){
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      }
      else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          email: req.user.email,
          id: req.user.id
        });
      }
    }




}