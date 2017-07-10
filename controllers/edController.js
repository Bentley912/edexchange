var db = require ("../models");

module.exports = {

edcreate: function(req,res){
    console.log(req.body);

     db.Educator.create({
                firstname: req.body.fnameValue,
               lastname: req.body.lnameValue,
               school: req.body.schoolValue,
                // userId: req.user.id
            }).then(function(data) {
                 console.log("Educator Created");
             // res.redirect(");
            }).catch(function(err){
                console.log(err);
            });
    // db.User.findOne({
    //         where: { id:req.user.id}
    //     }).then(function() {
    //         db.Educator.create({
    //             firstname: req.body.fnameValue,
    //             lastname: req.body.lnameValue,
    //             school: req.body.schoolValue,
    //             userId: req.user.id
    //         }).then(function(data) {
    //             console.log("Educator Created");
    //             // res.redirect(");
    //         }).catch(function(err){
    //             console.log(err);
    //         })
    //     });
}

};