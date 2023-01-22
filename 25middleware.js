const express=require('express');
const app=express();

const reqfilter=(req,resp,next)=>{
    // console.log("reqfilter");
    if(!req.query.age){
        resp.send("please provide age");

    }
    else{
next();        
    }
}
app.use(reqfilter)
app.get('/',(req,resp)=>{
    resp.send("welcome to home page");

})
app.get("/users",(req,resp)=>{
    resp.send("welcome to users page");
})
app.listen(1000);
