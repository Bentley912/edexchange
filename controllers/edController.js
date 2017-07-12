var db = require ("../models");


module.exports = {

edcreate: function(req,res){
    console.log(req.body.newEducator.fnameValue);

            db.Educator.create({
                firstname: req.body.newEducator.fnameValue,
                lastname: req.body.newEducator.lnameValue,
                school: req.body.newEducator.schoolValue,
                UserId: req.user.id
            }).then(function(data) {
                console.log("Educator Created");
                 res.redirect("/profile");
            }).catch(function(err){
                console.log(err);
            })
       
},

edProfile: function(req,res){
    db.Educator.findOne({
            where: { UserId: req.user.id }
        }).then(function(data) {
            res.json(data);
        });
}

};