const express=require('express');
const app=express();
const reqfilter=(req,resp,next)=>{
    if(!req.query.age){
        resp.send("please provide age")
          }      else if(req.query.age<18){
            resp.send("you are under aged")
          }

          else{
            next();


          }
     
}
// app.use(reqfilter);
app.get('/',(req,resp)=>{
    resp.send("welcome to home page");

});
app.get('/users',reqfilter,(res,resp)=>{
    resp.send("welcome to users page")
});
app.get('/about',(req,resp)=>{
    resp.send("welcome to about page");

});
app.listen(2000)