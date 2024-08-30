var http = require('http');
 
http.createServer(function (req, res) {
    res.write("Welcome to DITS");
    res.end();
}).listen(4000, function() {
    console.log("Server is listening on port 4000");

});
 
