const mongoose = require('mongoose');
const {
    Schema
} = mongoose;
const validator = require('validator');

// connection creation or creation a new database
mongoose.connect("mongodb://127.0.0.1:27017/Nawaz")
    .then(() => console.log("Connected successfully..."))
    .catch((err) => console.log(err));

// Schema
// A Mongoose schema defines the structure of the document,]
// default values, validators, etc
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        // validator
        required: true,
        // same playlist will not create
        unique: true,
        lowercase: true,
        // no spaces
        trim: true,
        minlength: [2, "minimum 2 letter needed"],
        maxlength: [5, 'maximum 5 letter needed']
    },
    // ctype: String,
    // enum :  Array, creates a validator that checks if the value is in the given array
    ctype : {
        type: String,
        required : true,
        lowercase : true,
        enum : ["frontend", "backend", "Database", "Full Stack Developer"]
    },
    // custom validation
    videos: {
        type : Number,
        required: true,
        validate(value){
            if(value < 0){
                throw new Error("videos count should not be negative")
            }
        }
    },
    auther: String,
    // email validation
    email : {
        type : String,
        required: true,
        unique : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email");
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// Collection Creation
// A Mongoose model is a wrapper on the Mongoose schema.
// A Mongoose schema defines the structure of the document.
// default values, validators, etc., whereas a Mongoose model
// provides an interface to the database for creating,
// query, updating, deleting records, etc.
const Playlist = new mongoose.model("Playlist", playlistSchema);

const createDocument = async () => {
    try {
        // ** insert multipe document
        const reactPlaylist = new Playlist({
            name: "agg",
            ctype: 'frontend',
            videos: 1,
            author: 'Nawaz Danish',
            email: "contact.to.nd@gmail.com",
            active: true,
        });

        // insert only one document at a time
        const result = await reactPlaylist.save();
        console.log(result);

    } catch (err) {
        console.log(err);
    } finally {
        console.log("Code Executed");
    };
};
createDocument();

// read document
const getDocument = async () =>{
    try{
        // const result = await Playlist.find()
        const result = await Playlist.find();
        // console.log(result);
    }catch(err){
        console.log(err);
    }
};
getDocument();