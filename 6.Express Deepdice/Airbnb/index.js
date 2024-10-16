import express from 'express';
import path from 'path';
import userRouter from './routes/userRouter.js';
import adminRouter from './routes/adminRouter.js';
const app=express();
app.use((req, res, next) =>{
    console.log(req.url,req.method);
    next();
})
app.use(express.urlencoded({extended:true}));
//we can also give common paths
app.use(userRouter);
app.use(adminRouter);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views/404.html'));
})
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});