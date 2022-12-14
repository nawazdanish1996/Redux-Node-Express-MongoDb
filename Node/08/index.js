const fs = require('fs');

fs.readFile('read.txt', "utf-8", (err, data)=>{
    console.log(data); // 2
});
console.log("After the data");  // 1