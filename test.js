const http = require("http");
const os = require("os");
const path = require("path");
const user = os.userInfo().username;
const osType = os.type();
const time = os.uptime();
const currentDir = process.cwd();
const serverFilename = path.basename(__filename);

http.createServer(function(request, response){
response.writeHead(200, {"Content-Type": "text/html"});
response.write(`<h1>System information</h1>
<p>Current name: ${user}</p>
<p>OS type: ${osType}</p>
<p>System work time: ${time}</p>
<p>Current work directory: ${currentDir}</p>
<p>Server file name: ${serverFilename}</p>
`);
response.end();
}).listen(5000);
console.log("Server is running at 5000")