const express=require("express");
const path=require("path");
const app=express()
const publicpath=path.join(__dirname,'public');
app.get('home',(_,resp)=>{
    resp.sendFile(`${publicpath}/home.html`)
})

app.listen(4000);