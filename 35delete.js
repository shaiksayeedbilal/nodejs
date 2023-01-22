const dbconnect=require('./28mongo');
const deletedata=async ()=>{
    let data =await dbconnect();
    console.log(data
        )
 let result=await data.deleteOne({name:"iphone 13+"})
console.log(result);
}

deletedata();
