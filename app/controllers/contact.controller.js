var contactPage = function(req,res){
  console.log("controller initialed");
  res.send("Hello I am the contact page");
};
exports.render= contactPage;
