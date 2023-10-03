const http = require("http");

const server = http.createServer((req, res) => {
  console.log("server listing on port 5000...");

  // res.end("Hello World");

  //proper use of if-else;

  if (req.url == "/") {
    res.end("here you are at HOME");
  }
   else if (req.url == "/help") {

    //blocking code but in my case it doesn't work..
    for(let i=0; i<35; i++){
        for(let j=0; j<100; j++){
           console.log(`${i} ${j}`)
        }
    }
    res.end("what kind of help do you  need!!");
  } 
  else {
    res.end("error page");
  }

});

server.listen(5000);
