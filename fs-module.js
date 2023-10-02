
const { readFileSync, writeFileSync } = require("fs");


const read = readFileSync("./folder/subfolder/te.txt", "utf-8");

console.log(read);

writeFileSync("./folder/test.md", `ok.. ok... ${read}`, { flag: `a` }); // append the text in current file
    

