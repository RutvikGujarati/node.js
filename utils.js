const {readFile,writeFile} = require("fs").promises; //use .promise insted pf util
const path = require("path");

const utils = require("util");

const readFilePromise = utils.promisify(readFile);
const writeFilePromise = utils.promisify(writeFile); //use this variable over the writefile in try block


const result = async ()=>{
    try{
        const re = await readFile("./folder/subfolder/te.txt","utf-8");
        console.log(re);

       await writeFile("./folder/subfolder/result.txt",`This is the structure of the utils for write files ${re}`,{flag:'a'})
    }catch(err){
        console.log(err);
    }
}

result();
// const getData = (path)=>{
//    return new Promise((res, rej)=>{
//       readFile(path, "utf-8", (err, data)=>{
//         if(err){
//             rej(err);
//         }else{
//             res(data);
//         }
//       })
//    })
// }