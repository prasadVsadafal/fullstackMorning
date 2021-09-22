// <script src="http"></script>
var http = require("http"); // http = obj

// build-in code -> core module
// own code -> local module

var server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    // set response content
    res.write("<mark>Hello node</mark>");
    res.end();
  }
});

server.listen(5000);
