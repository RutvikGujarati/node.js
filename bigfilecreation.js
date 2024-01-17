const {writeFileSync} = require("fs");

for(let i=0; i<3000; i++){
    writeFileSync("./folder/big.txt", `Confirming the new big data ${i}\n`,{flag:'a'})
}