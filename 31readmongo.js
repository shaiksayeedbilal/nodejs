const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const databsename='e-com'
const client=new MongoClient(url);
async function dbconnect(){

    let result=await client.connect();
    db=result.db(databsename);
    return db.collection('products')
    // collection=db.collection('products');
    // let data=await collection.find({}).toArray();
    // console.log(data)
}
// dbconnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
// })

const main= async ()=>{
    // console.log("main function called");
    let data= await dbconnect();
    console.log(data)
}
// dbconnect();
main()