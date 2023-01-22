const express=require('express');

const app=express();
app.get("",(req,resp)=>{
    resp.send("HELLO ,THIS IS HOME PAGE");


});
app.get('/about',(req,resp)=>{
    resp.send("hello , this is is about page");
});
app.listen(5200);
