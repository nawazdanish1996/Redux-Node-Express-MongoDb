const fs = require('fs');

// we passed a function as argument - call back
fs.writeFile("read.txt", "New File Created ", (err)=>{
    console.log("File is created");
    console.log(err);
});