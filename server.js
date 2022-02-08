// import express 
const express = require('express')
// init the app
const app=express()
// create a port 
const port=5000;
//create a Middelware
const verifDate=(req,res,next)=>{
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday",]
    let hours=new Date().getHours();
    if(days[new Date().getDay()]!=="sunday"&&
    days[new Date().getDay()]!=="saturday"&&hours<17&&hours>8)
    {next()}
    else {
        res.send("retard Mr ")
    }



}
app.use(verifDate)
app.use(express.static("public"))
// create a server 
app.listen(port,(err)=>(err)?console.log(err):console.log("The server is running on port 5000"))



