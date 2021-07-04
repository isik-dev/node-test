const http = require('http');

// Create server object
http.createServer(function (req, res) {
    // Write response
    res.write('Hello World')
    res.end()
}).listen(5000, function () {console.log('Server running');})