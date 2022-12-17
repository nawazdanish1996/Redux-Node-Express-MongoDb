// Streams and Buffer in Node

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, resp)=>{
    // fs.readFile("input.txt", 'utf-8', (err, data)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     resp.end(data.toString());
    // })

    const streams = fs.createReadStream('input.txt');
    streams.on('data', (chunkData)=>{
        resp.write(chunkData);
    });
    streams.prependOnceListener('end', ()=>{
        resp.end();
    })
    streams.on('error', (err)=>{
        console.log(err);
        resp.end("File not found");
    });
});

server.listen(4500, ()=>{
    console.log('http://localhost:4500');
})