console.log("first");

//without callback function it behaves as a synchronous way
const time = ()=>{
    console.log("midline");
};

time()
// console.log(time)
console.log("end");

console.log("1_first");

setTimeout(()=>{
    console.log("@_midline");
},0);

console.log("3_third");
