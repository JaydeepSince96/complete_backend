const http = require("http");
// This is how we can create server in pure Node.js
const server = http.createServer((req,res)=>{
    console.log(req)
    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("Hello Node.js from HTTP module")
})

const PORT = 4000;
server.listen(PORT,()=>{
    console.log(`Server is listening on PORT: ${PORT}`)
})