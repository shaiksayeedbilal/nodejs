const express=require('express');
const dbconnect=require('./28mongo');
const app=express();
app.get('/', async (req,resp)=>{
    let data= await dbconnect();
 data= await data.find().toArray();
 console.log(data)
resp.send({name:'node js'})
})

app.listen(3000);

