const dbconnect=require('./28mongo');
dbconnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data)
    })
})

const main=async ()=>{
    let data=await dbconnect();
    data=await data.find({}).toArray();
    console.log(data)

}
main()