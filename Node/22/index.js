// Streams Pipes in Node

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, resp)=>{
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(resp);
})


server.listen(4500, ()=>{
    console.log("Server started: http://localhost:4500/");
})