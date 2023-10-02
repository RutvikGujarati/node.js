const { readFileSync, readFile } = require("fs");

const first = readFileSync("./folder/test.md","utf-8",()=>{});

console.log(first);

console.log("second console");