// install validator: npm install validator


const validator = require('validator');

const res = validator.isEmail('nawazdanish1996@gmail.com');
console.log(res);

res === true ? console.log("Sahi Email hai") : console.log("Galat Email hai");