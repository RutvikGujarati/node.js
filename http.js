const http = require("http");

const server = http.createServer(
  //below function is callback function

  //it was breaking because of not usage of properly if-else or else-if for conditional rendering..
  (req, res) => {
    // console.log(req);
    if (req.url === "/") {
      res.end("You are at Home page");
    }

    if (req.url === "/help") {
      res.end("what kind of help we can do for you?");
    }
    res.end("blocking page");
  }
);

server.listen(5000,()=>{
  console.log("server listing on port 5000...");
});
