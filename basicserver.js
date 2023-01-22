const http=require('http')
http.createServer((req,resp)=>{
    resp.write("hello this is anil sidhu");
    resp.end();
}).listen(60000);
// test(a,b){


// }
// test(10,20)

