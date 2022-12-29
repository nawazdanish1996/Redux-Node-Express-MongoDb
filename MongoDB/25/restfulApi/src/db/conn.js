const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/students-api").then(()=> {
    console.log("Mongoose sucessfully connected");
}).catch((err)=>{
    console.log(err, "Mongoose not connected");
})