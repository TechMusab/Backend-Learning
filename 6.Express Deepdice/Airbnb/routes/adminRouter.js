const express = require('express');
const path = require('path');
const adminRouter=express.Router();
adminRouter.get('/add-home',(req,res)=>{
res.sendFile(path.join(__dirname,'../views/addhome.html'));
});
adminRouter.post('/add-home',(req,res)=>{
res.sendFile(path.join(__dirname,'../views/success.html'));
});
module.exports=adminRouter;