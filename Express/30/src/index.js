const express = require('express');
const app = express();
const path = require('path');
const port = 4500 || process.env.port;

// console.log(path.join(__dirname, '../public'));

// path
const staticPath = path.join(__dirname, '../public');

// to set the view engine
app.set('view engine', 'hbs');

// template engine root
app.get('/', (req, resp)=>{
    resp.render("index", {
        channelName: 'YouTube'
    });
})

// built in middleware
// app.use(express.static(staticPath));

// pages
app.get('/', (req, res)=>{
    res.send("<h1>Mister</h1>")
});

app.listen(port, ()=>{
    console.log(`Listening to the http:localhost:${port}`);
})