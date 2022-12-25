const mongoose = require('mongoose');
const { Schema } = mongoose;

// Connection creation and creation a new db.
mongoose.connect("mongodb://127.0.0.1:27017/Nawaz").then(()=>{
    console.log("Connection Successful...");
}).catch((err)=> {
    console.log(err);
});

// Schema
// A Mongoose schema defines the structure of the document,]
// default values, validators, etc..

const playlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    auther: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
});

// Collection creation
const playlist = new mongoose.model("Playlist", playlistSchema);

// create document or insert document
const createDocument = async () =>{
    try{
        const reactPlaylist = new playlist({
            name: "MongoDB",
            ctype: "Backend",
            videos: 66,
            auther: "Nawaz Danish",
            active: true
        });
        const result =await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }finally{
        console.log("Code Executed");
    }
};
createDocument();