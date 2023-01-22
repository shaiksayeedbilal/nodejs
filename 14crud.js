const fs=require('fs');
// fs.writeFileSync('apple.txt','this is a simple txt file')
const path=require('path');
const dirpath=path.join(__dirname,'crud');
const filepath=`${dirpath}/apple.txt`;
fs.writeFileSync(filepath,"this is a crud operatio n file");
