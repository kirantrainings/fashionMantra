var port =3000;
var expressServer = require('./app/config/express');
var app = expressServer();
app.listen(port);
console.log("http://locahost:"+port);
