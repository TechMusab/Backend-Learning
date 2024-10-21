const express = require('express');
const path = require('path');
const rootDir = require('../utils/path.js');
const adminRouter=express.Router();

adminRouter.get('/add-home',(req,res)=>{
res.sendFile(path.join(rootDir,'views/addhome.html'));
});
let registeredhomes=[];
adminRouter.post('/add-home',(req,res)=>{
registeredhomes.push({houseName:req.body.houseName})
res.sendFile(path.join(rootDir,'views/success.html'));
});
exports.adminRouter=adminRouter;
exports.registeredhomes=registeredhomes;
