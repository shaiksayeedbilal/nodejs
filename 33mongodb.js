const dbconnect=require("./28mongo");
const insert =async ()=>{
    const db= await dbconnect();
    // console.log(db)
    const result= await db.insert(
        {name:"not 6",brand:'7',price:30000,category:"fresh"},
        {name:'max2',brand :'micromax',price:320,category:"mobile"
        },

{name:'max 3',brand:"vivo",price:420,category:"mobile"}
    );
    console.log(result);

     }
insert();
