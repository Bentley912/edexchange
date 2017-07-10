var db = require ("../models");


module.exports = {

edcreate: function(req,res){
    console.log(req.body.newQuote.fnameValue);

     
    db.User.findOne({
            where: { id:req.user.id}
        }).then(function() {
            db.Educator.create({
                firstname: req.body.newQuote.fnameValue,
                lastname: req.body.newQuote.lnameValue,
                school: req.body.newQuote.schoolValue,
                userId: req.user.id
            }).then(function(data) {
                console.log("Educator Created");
                // res.redirect(");
            }).catch(function(err){
                console.log(err);
            })
        });
}

};