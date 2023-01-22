const http=require('http');
const test=(a)=>{
    
}
const datacontrol= (req,resp)=>{
    resp.write("hello this is creating server");
    resp.end();
}

http.createServer(datacontrol).listen(4500);