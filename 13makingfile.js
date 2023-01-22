const { dir } = require('console');
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'files')

// fs.writeFileSync('apple.txt','this is apple file');

console.log(dirpath)
for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+"/hello"+i+".txt",'a simple text file');
}
fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is",item)
    })
    // console.log(files)
})