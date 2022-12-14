const mongoose = require('mongoose');
const validator = require("validator");

// Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("Invalid email")
            }
        }
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        unique: true,
        // validate(val){
        //     if(!validator.isMobilePhone(val)){
        //         throw new Error("Invalid Mobile number")
        //     }
        // }
    },
    address: {
        type: String,
        required : true,
        // validate(val){
        //     if(val < 5){
        //         throw new Error("Address should not be less than 5 character")
        //     }
        // }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// Collection creation
const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;