var homePage = function(req,res){
  console.log("controller initialed");
  res.send("Hello I am the home page");
};
exports.render= homePage;
