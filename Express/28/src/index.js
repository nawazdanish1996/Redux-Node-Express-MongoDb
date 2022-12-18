const express = require('express');
const app = express();
const port = 4500 || process.env.port;
const path = require('path');

// console.log(path.join(__dirname, '../public'));

// path
const staticPath = path.join(__dirname, '../public');

// built in middleware
app.use(express.static(staticPath));

// pages
app.get('/', (req, resp)=>{
    resp.send("Mister");
});
app.get('/about', (req, resp)=>{
    resp.send("about");
});

// listening server
app.listen(port, ()=>{
    console.log(`Listening to the http://localhost:${port}`);
});