const express=require('express');
const path=require("path");
const publicpath=path.join(__dirname,'public')
console.log(__dirname);
console.log(publicpath)
const app=express();
// console.log(__dirname)
app.use(express.static(publicpath));

app.listen(5000);
