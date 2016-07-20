var express = require("express");
var bodyParser = require('body-parser')

module.exports = function () {
    var app = express();
    app.set("views", "./app/views");
    app.set("view engine", "ejs");
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({
        extended: false
    }));

    // parse application/json
    app.use(bodyParser.json());
    app.use(express.static("./public"))
    console.log("Express Initiatlized");
    require("../routes/index.route")(app);
    return app;
};
