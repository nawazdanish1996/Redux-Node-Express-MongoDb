const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

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
        // const reactPlaylist = new Playlist({
        //     name: "Node",
        //     ctype: 'Backend',
        //     class: 1,
        //     author: 'Nawaz Danish',
        //     active: true
        // });
        // const cssPlaylist = new Playlist({
        //     name: "CSS",
        //     ctype: 'Frontend',
        //     class: 99,
        //     author: 'Nawaz Danish',
        //     active: true
        // });
        // const bootstrapPlaylist = new Playlist({
        //     name: "Bootstrap",
        //     ctype: 'Frontend',
        //     class: 46,
        //     author: 'Nawaz Danish',
        //     active: true
        // });
        // const expressPlaylist = new Playlist({
        //     name: "Express",
        //     ctype: 'Backend',
        //     class: 69,
        //     author: 'Nawaz Danish',
        //     active: true
        // });

        // insert only one document at a time
        // const result = await reactPlaylist.save();
        // console.log(result);

        // insert multipe document
        // const result = await Playlist.insertMany([
        //     cssPlaylist,
        //     bootstrapPlaylist,
        //     expressPlaylist,
        //     reactPlaylist
        // ]);
        // console.log(result);

        // ** read document

    } catch (err) {
        console.log(err);
    } finally {
        console.log("Code Executed");
    };
};

// read document
// const getDocument = async () =>{
//     try{
//         // const result = await Playlist.find()
//         const result = await Playlist.find({ctype: "Frontend"}).select({name: 1}).limit(1).skip(1);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };


// read document & MongoDB comparison query operator
// doc: https://www.mongodb.com/docs/manual/reference/operator/query-comparison/
// const getDocument = async () =>{
//     try{
//         // const result = await Playlist.find()
//         const result = await Playlist
//         .find({videos: {$gt : 65}})
//         .select({name: 1});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };

// read document & MongoDB Logical Query Operators
// doc: https://www.mongodb.com/docs/manual/reference/operator/query-logical/
// syntex
// { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }

const getDocument = async () =>{
    try{
        const result = await Playlist
        // .find({$or : [{ctype: "Frontend"}, {auther : "Nawaz Danish"}]})
        .find({$and : [{ctype: "Backend"}, {auther : "Nawaz Danish"}]})
        .select({name: 1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
};

getDocument();

// function defined
// createDocument();