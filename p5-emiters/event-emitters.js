const eventEmmiter = require("events");

const myEvent = new eventEmmiter()

myEvent.on("Greet",(name)=>{
    console.log(`Welcome back ${name}`)
})

myEvent.emit("Greet","Jaydeep Bhattachary")