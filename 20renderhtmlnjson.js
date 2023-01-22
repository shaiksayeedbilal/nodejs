const express=require("express");
const app=express();
app.get("",(req,res)=>{
    res.send(`<h1>welcome , to home page <h1>   <a href="/about">goto about page</a>`)
});
app.get("/about",(req,res)=>{
    res.send(`name : <input type="text" placeholder="enter name"/> <a href="/">goto home page</a> `);

});

app.get("/help",(req,res)=>{
    res.send([
        {
            name:"anil",
            email:"anil@test.com",

        },

        {
            name:'sharma',
            email:'saitest@gmail.com'
        }
    ])
});
app.listen(1000);
