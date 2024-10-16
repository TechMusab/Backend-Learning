import express from 'express';
import path from 'path';
const userRouter=express.Router()
userRouter.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views/home.html'));
});
export default userRouter;