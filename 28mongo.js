const {MongoClient}=require('mongodb');
const url='mongodb://localhost:27017';
const databsename='e-com';
const client=new MongoClient(url);
async function dbconnect(){

    let result=await client.connect();
    db=result.db(databsename);
    return db.collection('products')
}
module.exports=dbconnect;