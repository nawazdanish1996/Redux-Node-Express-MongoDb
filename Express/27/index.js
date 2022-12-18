const express = require('express');
const app = express();
const port = 4500 || process.env.port;
const path = require('path');

app.get('/', (req, resp)=>{
    resp.sendFile(path.join(__dirname, './home.html'));
});
app.get('/about', (req, resp)=>{
    resp.status(200).send("<h1>About</h1>");
});
app.get('/contact', (req, resp)=>{
    resp.status(200).send("<h1>contact</h1>");
});
app.get('/temp', (req, resp)=>{
    resp.send({
        id: 1,
        name: "Nawaz Danish"
    });
});

app.listen(port, ()=>{
    console.log(`Listening to the http://localhost:${port}`);
})