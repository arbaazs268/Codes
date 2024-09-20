const http = require("http");
const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    return res.send("hello world");
})

app.get('/about',(req,res)=>{
    return res.send("nodejs");
})

const myserver= http.createServer(app);
myserver.listen(8000,()=>console.log("Server Start"))