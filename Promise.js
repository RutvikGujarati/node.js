const { readFile } = require("fs");

const getData = (path) => {
  //another callback
  return new Promise((resolve, rej) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        rej(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getData("./folder/test.md")
//   .then((result) => console.log(result))  //use .then method to get result
//   .catch((err) => console.log(err));


  //use async await to get  result

  const setup = async()=>{
    try{
    const op = await getData("./folder/test.md");
    console.log(await op);

    }catch(err){
       console.log(err);
    }
  }

  setup();