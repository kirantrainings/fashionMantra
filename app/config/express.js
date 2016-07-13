var express = require("express");

module.exports = function () {
    var app = express();
    app.set("views", "./app/views");
    app.set("view engine", "ejs");

    app.use(express.static("./public"))
    console.log("Express Initiatlized");
    require("../routes/index.route")(app);
    return app;
};
