// const {createReadStream}  = require("fs");

// const stream = new createReadStream("./folder/test.md", {highWaterMark: 90000, encoding:"utf-8"});

// stream.on('data',(response)=>{
//   console.log(response);
// })

const http = require("http");

const fs = require("fs");

http.createServer((req, res)=>{
    //with http
    // const text = fs.readFileSync("./folder/big.txt","utf-8");
    // res.end(text);

    const fileRead = fs.createReadStream("./folder/big.txt","utf-8");
    fileRead.on('open',()=>{
        fileRead.pipe(res)
    })
}).listen(3000);