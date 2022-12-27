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
            name: "aaa",
            ctype: 'frontend',
            videos: 0,
            author: 'Nawaz Danish',
            active: true,
        });
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
        const result = await reactPlaylist.save();
        console.log(result);

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

// const getDocument = async () =>{
//     try{
//         const result = await Playlist
//         // .find({$or : [{ctype: "Frontend"}, {auther : "Nawaz Danish"}]})
//         .find({$and : [{ctype: "Backend"}, {auther : "Nawaz Danish"}]})
//         .select({name: 1});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };

// sort({name : 1/-1}) and count() countDocuments() query method using MongoDB
// const getDocument = async () =>{
//     try{
//         const result = await Playlist
//         .find({$and : [{ctype: "Backend"}]})
//         .select({name: 1})
//         .sort({name: -1})
//         // .countDocuments()
//         // .count();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };
// getDocument();

// function defined
// createDocument();


// update document
// updateOne / findByIdAndUpdate
// syntex: updateOne({key id}, {what you want to update?})
// const updateDocument = async (_id) =>{
//     try{
//         const result = await Playlist.updateOne({_id}, {name: 'MongoDB'});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };
// updateDocument("63a946c9cb03bb122ebf5de0");


// delete document
// deleteOne / remove // findByIdAndDelete
// syntex: remove({key id}, {what you want to delete?})
// const deleteDocument = async (_id) =>{
//     try{
//         const result = await Playlist.remove({_id}, {name: 'Bootstrap'});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// };
// deleteDocument("63a956cc744aae20efe00ecd");