const path = require("path");
const fs = require("fs");

const dataFolder = path.join(__dirname,"data")

// To create the directory programmatically
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder)
    console.log("data folder created")
}

// To create file programattically
const filePath = path.join(__dirname, "test.txt")

// To write something from program to created file
fs.writeFileSync(filePath, "Hello I'm learning Node.js")

//To read content from created file.
const readContentFromFile = fs.readFileSync(filePath, "utf8")
console.log("File content:",readContentFromFile)

//To added new line of text programatically to the created file.

fs.appendFileSync(filePath, "\n This is newly added line here")

// Async way of creating file.

const AsyncFilePath = path.join(dataFolder, "asyncFilePath.txt")
fs.writeFile(AsyncFilePath, "Hello Async Node.js" ,(err)=>{
    if(err)  throw err;
    console.log("Async file is created successfully.")

    // Async way to read file
    fs.readFile(AsyncFilePath, "utf-8",(err,data)=>{
        if(err)throw err;
        console.log(data, "<==== Async file data")
    })

    // Added new line in Async way

    fs.appendFile(AsyncFilePath, "\n This is newly added line in async file", (err)=>{
        if(err) throw err
        console.log("Newly added line in async file:")
    })

})