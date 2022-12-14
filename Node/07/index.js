const fs = require('fs');

// we passed a function as argument - call back
// fs.writeFile("read.txt", "New File Created ", (err)=>{
//     console.log("File is created");
//     console.log(err);
// });


// append text in same file
// fs.appendFile('read.txt', "added new", (err)=>{
//     console.log(err);
//     console.log("file updated");
// });


fs.readFile("read.txt", 'utf-8', (err, data)=>{
    console.log(data);
})