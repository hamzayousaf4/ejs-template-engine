const http = require('http');
http.createServer((req,resp)=>{
resp.writeHead(200,{'Content-Type':'application\json'});
resp.write(JSON.stringify({name:'Hamza' ,email:'Hamzayousaf420@gmail.com'}));
resp.end();
}).listen(5000);
