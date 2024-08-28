import http from 'http';

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req,res)=>{
res.statusCode = 300;
res.setHeader('Content-Type','text/plan');
res.end('Hello World this is kali');

server.listen(port,hostname,()=>{
console.log(`Server running at http://${hostname}:${port}/`);

});
