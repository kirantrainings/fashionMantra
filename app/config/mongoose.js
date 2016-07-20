var mongoose = require("mongoose");
var config = require("../config/config");
var connectDB = function () {
    mongoose.connect(config.connectionstring);
};


module.exports = connectDB;
