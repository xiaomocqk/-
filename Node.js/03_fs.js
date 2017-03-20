const fs = require('fs');
const data = fs.readFileSync('little.txt');
console.log(data.toString());
console.log('It has done!');
