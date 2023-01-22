const http =require('http');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
resp.write(JSON.stringify({name:'anid sidhu',email:'anilbilal'}));
resp.end();

}).listen(5000);