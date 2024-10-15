const testingSyntax=require('./error');
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log('This is a testing syntax');
    testingSyntax();
    res.end();
});
server.listen(3001,()=>console.log('Server is running on port 3001'));
