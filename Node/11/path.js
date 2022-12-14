// Path doc: https://nodejs.org/dist/latest-v18.x/docs/api/path.html

const path = require('path');

// path D:\Node, Express, MongoDB\Node\11
// console.log(path.dirname('D:\\Node, Express, MongoDB\\Node\\11\\path.js'));

// Extention name .js
// console.log(path.extname('D:\\Node, Express, MongoDB\\Node\\11\\path.js'));

// base Name path.js
// console.log(path.basename('D:\\Node, Express, MongoDB\\Node\\11\\path.js'));

// path.parse(path)
// console.log(path.parse('D:\\Node, Express, MongoDB\\Node\\11\\path.js'));
/* {
    root: 'D:\\',
    dir: 'D:\\Node, Express, MongoDB\\Node\\11',
    base: 'path.js',
    ext: '.js',
    name: 'path'
} */
const myPath = path.parse('D:\\Node, Express, MongoDB\\Node\\11\\path.js');
console.log(myPath);
console.log(myPath.name);