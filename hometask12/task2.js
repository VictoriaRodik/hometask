const http = require("http");
const os = require("os");
const path = require("path");
const personalModule = require('./personalmodule.js');
const user = os.userInfo().username;
const now = new Date();


http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/html"});
response.write(`
<h3>Date of request: ${now}</h3>
<h3>${personalModule.greeting(user)}, ${user}</h3>
`);
response.end();
}).listen(8000);
console.log("Server is running at 8000")