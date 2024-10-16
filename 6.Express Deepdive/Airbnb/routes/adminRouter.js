const express = require('express');
const path = require('path');
const rootDir = require('../utils/path.js');
const adminRouter=express.Router();

adminRouter.get('/add-home',(req,res)=>{
res.sendFile(path.join(rootDir,'views/addhome.html'));
});
adminRouter.post('/add-home',(req,res)=>{
res.sendFile(path.join(rootDir,'views/success.html'));
});
module.exports=adminRouter;