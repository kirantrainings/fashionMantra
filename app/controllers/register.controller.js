var Users = require("../models/register");

var registerUser = function (req, res) {
    var user = {
        name: "PATURI",
        company: "NBITS"
    };
    console.log(req.body);
    createUser(req.body.register);
    return res.send("user Regstered");
};


var getAllUsers = function (req, res) {
    Users.find({}, function (err, docs) {
        console.log(docs)
            // docs.forEach 
    });
};


var createUser = function (user) {
    var user = new Users(user);
    user.save(function (err, user) {
        if (err) {
            console.log(err);
        } else {
            console.log(user);
        }
    });
};


var loginUser = function(req,res){
    var userDetails = checkuser(req);
    res.send(userDetails);
};
var checkuser = function(data){
    User.findOne({lastName:data.lastName,password:data.password},function(err,data){
        if(err){
            console.log("error occurred");
        }
        else{
            return data;
        }
    })
}

exports.login = loginUser;
exports.registerUser = registerUser;
