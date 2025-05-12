
// First level of Callback function
const person = (name, callbackFn)=>{
    console.log(`My name is ${name} from:-`)
    callbackFn()
}

const address = ()=>{
    console.log("India")
}

person("Jaydeep", address)