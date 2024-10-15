import http from 'http';
import express from 'express';
const app=express();
const server=http.createServer(app)
server.listen(3000,()=>{
    console.log('server started');
});
//middleware
app.use((req,res,next)=>{
    console.log('1st middleware');
    next();
});
app.use((req,res,next)=>{
    console.log('2nd middleware');
    res.send('<h1>hello</h1>');
});
