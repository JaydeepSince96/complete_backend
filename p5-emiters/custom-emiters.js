const EventEmmiter = require("events");

class MyCustomEmiters extends EventEmmiter{
    constructor(){
        super();
        this.greeting= "Hello"
    }
    greet(name){
        this.emit("greeting",`${this.greeting} ${name}`)
    }
}

const myCustomEmiter = new MyCustomEmiters()

myCustomEmiter.on("greeting",(input)=>{
    console.log("Greeting Event",input);
})

myCustomEmiter.greet("Jaydeep")