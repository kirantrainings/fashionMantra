//if someone calls the localhost:3000/ render the home page

module.exports = function(app){
  console.log("Route Initialized");
  var index = require("../controllers/index.controller");
  var about = require("../controllers/about.controller");
  var contact = require("../controllers/contact.controller");
  app.get("/",index.render);
  app.get("/about",about.render);
  app.get("/contact",contact.render);
};
