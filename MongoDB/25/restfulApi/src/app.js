const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const router = require("./routers/routers");

// connected mongoose
require("./db/conn");

// Collection
const Student = require("./models/students");

// middleware
app.use(express.json());

// router
// we need to regester our router
app.use(router);
// router

// listening
app.listen(port, () => {
    console.log(`Listening to the http://localhost:${port}`);
});