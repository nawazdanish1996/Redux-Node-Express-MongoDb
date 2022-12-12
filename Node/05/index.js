const fs = require("fs");


// Write File (Create a new file)
fs.writeFileSync('read.txt', 'Nawaz Danish');

// Read File
fs.readFile('read.txt', 'utf-8', (err, data)=>{
    console.log(data);
});

// try {
    
// } catch (error) {
//     console.log(error);
//     console.log("- Error in this file -");
// }