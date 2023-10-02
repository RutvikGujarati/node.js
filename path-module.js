const path = require("path")

const variable = path.sep;


const filepath = path.join('folder', 'subfolder','te.txt')
console.log(filepath);


const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, 'folder' , 'subfolder','te.txt')
console.log(absolute);


console.log(variable);