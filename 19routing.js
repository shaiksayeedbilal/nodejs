const express=require("express");
const app =express();
app.get("",(req,res)=>{
    console.log("data sent by browser",req.query);
    res.send("welcome , this is node js home page");


});
app.get('/about',(req,res)=>{
    res.send('welcome , this is about page');
});
app.get("/help",(req,res)=>{
    res.send("welocme , this is help page how can i help you");
});

app.listen(1200)
