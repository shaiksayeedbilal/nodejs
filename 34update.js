const dbconnect=require('./28mongo');
const updatedata=async ()=>{
let data =await dbconnect();
let result = await data.updateOne({
name:"iphone 13+"},{
    $set:{name:'max 6'}
})
console.log(result)
}

updatedata();