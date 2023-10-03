const EventEmitter = require("events")
const http = require("http");

const EventHandel = new EventEmitter();

EventHandel.on("res",(name, surname)=>{ //listen with on 
    console.log(`"YES.. This is working..!!!" ${name} ${surname}`); //logic
})

EventHandel.on("res",()=>{
    console.log("YES another event is also working.. This is working..!!!"); //logic of another event 
})

EventHandel.emit("res","Rutvik","Gujarati");


//create server using event

const server = http.createServer();

server.on("result",(req, res)=>{
    res.end("actively listening");
})

server.listen(3555);