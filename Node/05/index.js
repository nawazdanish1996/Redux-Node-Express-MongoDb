const fs = require("fs");


// Write File (Create a new file)
// fs.writeFileSync('read.txt', 'Nawaz Danish');

// Append file
// fs.appendFileSync("read.txt", " How are you? ");

// Read File
// fs.readFile('read.txt', 'utf-8', (err, data)=>{
//     console.log(data);
// });

// Read File
const data = fs.readFileSync('read.txt');
// console.log(data);
console.log(data.toString());
// output: <Buffer 4e 61 77 61 7a 20 44 61 6e 69 73 68 75 74 66 2d 38>
// Buffer is mainly used to store binary data.

// Rename File
fs.renameSync('read.txt', 'mister.txt');













// try {
    
// } catch (error) {
//     console.log(error);
//     console.log("- Error in this file -");
// }