// Routing || HTTP requests in Node
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const http = require("http");

const server = http.createServer((req, resp)=>{
    // console.log(req.url);
    if(req.url == '/'){
        resp.end("<h1>This is Homepage Nawaz Danish</h1>");
    }else if(req.url == "/about"){
        resp.end("<h1>about</h1>");
    }else if(req.url == "/contact"){
        resp.end("<h1>contact</h1>");
    }else if(req.url == "/portfolio"){
        resp.end("<h1>portfolio</h1>");
    }else{
        // error page
        resp.writeHead(404, {"Content-type": 'text/html'});
        resp.end("404 error pages. Page doesn't exists.");
    }
});

server.listen(4500, ()=>{
    console.log("Listening http://localhost:4500/");
});