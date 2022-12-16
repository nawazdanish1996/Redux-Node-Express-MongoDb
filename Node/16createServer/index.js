// Creating web server in Node.js
// The http.createServer() method includes request.


const http = require('http');

const server = http.createServer((req, resp)=>{
    resp.end("Server Started using Node.js");
});

server.listen(4500, ()=>{
    console.log("Listening to the http://localhost:4500");
});