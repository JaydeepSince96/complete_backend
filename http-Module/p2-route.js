const http = require("http");
const route = http.createServer((req,res)=>{
    const url = req.url
    if(url === "/"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("This is Home Page")
    }else if(url === "/projects"){
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("you are on projects page")
    }else{
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.end("This page is not found")
    }
})

const PORT = 3000
route.listen(PORT,()=>{
    console.log(`Server is listening on PORT: ${PORT}`)
})