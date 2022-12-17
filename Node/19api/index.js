// Create simple API in Node
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp)=>{
    // console.log(req.url);

    const data = fs.readFileSync(`${__dirname}/api/users.json`, 'utf-8');
    const objData = JSON.parse(data);

    if(req.url == '/'){
        resp.end("<h1>This is Homepage Nawaz Danish</h1>");
    }else if(req.url == "/about"){
        resp.end("<h1>about</h1>");
    }else if(req.url == "/contact"){
        resp.end("<h1>contact</h1>");
    }else if(req.url == "/portfolio"){
        resp.end("<h1>portfolio</h1>");
    }else if(req.url == "/api"){
        resp.writeHead(200, {'content-type': 'application/json'});
        resp.end(objData[0].name);
    }else{
        // error page 404
        resp.writeHead(404, {"Content-type": 'text/html'});
        resp.end("404 error pages. Page doesn't exists.");
    }
});

server.listen(4500, ()=>{
    console.log("Listening http://localhost:4500/");
});