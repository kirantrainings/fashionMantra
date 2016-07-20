var config = require('./app/config/config');
var port = config.port;
var mongoose = require("./app/config/mongoose");
var expressServer = require('./app/config/express');
mongoose();
var app = expressServer();
app.listen(port);
console.log("http://locahost:" + port);
