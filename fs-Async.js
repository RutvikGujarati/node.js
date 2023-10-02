const { readFile, writeFile } = require("fs");
const { error } = require("console");


console.log("start from here");

readFile("./folder/test.md", "utf-8", (err, result) => {
  if (err) {
    console.log(error);
    return;
  }
  const red = result;

  //pass the value of test.md into writefile method to save their details ... into te.txt
console.log("midline");

  writeFile(
    "./folder/subfolder/te.txt",
    `here is total values `,
    (err, res) => {
      if (err) {
        console.log(err);
        return;
      }
    //   return res;
      console.log(res);
    }
  );
  console.log("end here");
});
console.log("starting new phase");