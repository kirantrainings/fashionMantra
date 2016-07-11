var express = require("express");
module.exports=function(){
  var app = express();
  console.log("Express Initiatlized");
  require("../routes/index.route.js")(app);
  return app;
};
