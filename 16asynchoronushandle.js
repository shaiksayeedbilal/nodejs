let a=20;
let b=0;
setTimeout(() => {
    b=30;
}, 2000);
let waitingdata=new Promise((resolve,reject)=>{
resolve(30);
});

waitingdata.then((data)=>{
    console.log(a+data);
})
console.log(a+b);