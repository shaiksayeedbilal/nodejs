console.log("starting up");

setTimeout(() => {
    console.log("2 second log");
}, 2000);

setTimeout(()=>{
    console.log("0 second log");
})

console.log("finishing up");
