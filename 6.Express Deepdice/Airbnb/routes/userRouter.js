import express from 'express';
const userRouter=express.Router()
userRouter.get('/',(req,res)=>{
    res.send(`
    <h1>Welcome to AIRBNB</h1>
    <p>Find the best places to stay, dine and relax</p>
    <a href="/add-home"> Add Home</a>
    `);
});
export default userRouter;