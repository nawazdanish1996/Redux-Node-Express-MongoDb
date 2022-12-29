const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
// connected mongoose
require("./db/conn");
// Collection
const Student = require("./models/students");

app.use(express.json());

// create doc
app.post("/students", (req, resp)=>{
    const user = new Student(req.body);
    console.log(user);
    // save data
    user.save().then((()=>{
        resp.status(201).send(user);
    })).catch((err)=>{
        resp.status(400).send(err)
    })
});

app.listen(port, ()=>{
    console.log(`Listening to the http://localhost:${port}`);
});