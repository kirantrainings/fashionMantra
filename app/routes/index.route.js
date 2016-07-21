//if someone calls the localhost:3000/ render the home page

module.exports = function (app) {
    console.log("Route Initialized");
    var index = require("../controllers/index.controller");
    var register =
        require("../controllers/register.controller");
    app.get("/", index.render);
    app.post('/api/register', register.registerUser);
    app.post('/api/login', register.login);
    app.get("/api/getAllUsers", register.getProfiles);
    app.post("/api/authenticateUser",register.getUserDetails);
};
