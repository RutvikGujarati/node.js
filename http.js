const http = require("http");

const server = http.createServer(

    //below function is callback function
    (request, response)=>{
        // console.log(request);
        if(request.url === "/"){
           response.end("You are at Home page");
        }

        if(request.url === "/help"){
            response.end("what kind of help we can do for you?");
        }
    response.end(`
        <h1>Default page!!</h1>
        <a href="/">back Home</a>
   ` )
})

server.listen(5000);