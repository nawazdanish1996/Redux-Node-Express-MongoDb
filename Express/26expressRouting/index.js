const express = require("express");
const app = express();
const port = 4500 || process.env.port;

app.get('/', (req, resp)=>{
    resp.send("Homepage");
});
app.get('/about', (req, resp)=>{
    resp.status(200).send("About");
});
app.get('/contact', (req, resp)=>{
    resp.status(200).send("contact");
});


app.listen(port, ()=>{
    console.log(`Listening to the port http://localhost:${port}`);
});