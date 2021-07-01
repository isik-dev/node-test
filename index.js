const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), function (err, content) {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     })
    // }
    // else if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), function (err, content) {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content);
    //     })
    // }
    // else if (req.url === '/api/users') {
    //     const users = [
    //         {name: 'James Boiler', age: 45},
    //         {name: 'Alexa', age: 29001}
    //     ]
    //     res.writeHead(200, { 'Content-Type': 'application/JSON' })
    //     res.end(JSON.stringify(users))
    // }

    // Build file path
    

})

const PORT = process.env.PORT || 5000

server.listen(PORT, function () {console.log(`Server running on PORT: ${PORT}`);})