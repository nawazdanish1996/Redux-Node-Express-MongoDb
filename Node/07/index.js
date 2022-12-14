const fs = require('fs');

fs.writeFile("read.txt", "New File Created ", (err)=>{
    console.log("File is created");
    console.log(err);
});