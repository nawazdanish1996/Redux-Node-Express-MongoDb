const express = require('express');
const app = express();
const path = require('path');
const port = 4500 || process.env.port;
const hbs = require('hbs');

// console.log(path.join(__dirname, '../public'));

// path
const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// to set the view engine
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// template engine root
app.get('/', (req, resp)=>{
    resp.render("index", {
        UserName: 'Nawaz Danish'
    });
})
app.get('/about', (req, resp)=>{
    resp.render('about');
})
app.get('/portfolio', (req, resp)=>{
    resp.render('portfolio');
})
app.get('/contact', (req, resp)=>{
    resp.render('contact');
})
app.get('*', (req, resp)=>{
    resp.render('page404', {
        errorcomemnt: "Oops page couldn't be found"
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