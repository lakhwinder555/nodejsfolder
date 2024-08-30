var http = require('http');
 
http.createServer(function (req, res) {
    res.write("Hello from Node.js server123, Hello again");
    res.end();
}).listen(4000, function() {
    console.log("Server is listening on port 4000");

});
 
