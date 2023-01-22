console.log("code step by step");
// global modules does not require import 
const fs=require('fs');
fs.writeFileSync('hello.txt','code step by step');
console.log(fs)
console.log(__dirname)
console.log('-->',__filename)
fs.writeFileSync("code.txt",'hii this is bilal code')

console.log("->>",__dirname)
console.log("file name->",__filename)