const os = require("os")


//info about current user
const user =os.userInfo();

//method which will return systems uptime in seconds

const system = os.uptime();
console.log(system);

//current os

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory : os.totalmem(),
    freeMemory : os.freemem()
}

console.log(currentOs);