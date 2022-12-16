const fs = require('fs');

const obj = {
    name : "Nawaz Danish",
    age: 26,
    email: 'nawazdanish1996@gmail.com',
    address: "Lodhan Chowk",
}

const jsonData = JSON.stringify(obj);

// fs.writeFile('json1.json', jsonData, (err)=>{
//     console.log("File Created");
// })

fs.readFile('json1.json', 'utf-8', (err, data)=>{
    // JSON
    console.log(data);
    // JOSN to Object
    const objData = JSON.parse(data);
    console.log(objData);
})



// const jsonData = JSON.stringify(obj);
// console.log(jsonData);
/* JSON

{"name":"Nawaz Danish","age":26,"email":"nawazdanish1996@gmail.com"}
*/

// const objData = JSON.parse(jsonData);
// console.log(objData.name);
/* Object

{ name: 'Nawaz Danish', age: 26, email: 'nawazdanish1996@gmail.com' }
*/