// Require our dependecies
var express = require("express");


var bodyParser = require("body-parser");
var routes = require("./routes/routes");
var mysql = require("mysql");
db = require("./models");
var session = require("express-session");


// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);


db.sequelize.sync({}).then(function() {

    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});



