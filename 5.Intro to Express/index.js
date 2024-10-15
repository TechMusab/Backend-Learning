import express from 'express';
const app=express();
app.listen(3000,()=>console.log('server started on http://localhost:3000')
)
//middleware
app.use("/",(req,res,next)=>{
    console.log('1st middleware');
    next();
});
app.use("/submit",(req,res,next)=>{
    console.log('2nd middleware');
    res.send('<h1>hello</h1>');
});
//cannot call send after send