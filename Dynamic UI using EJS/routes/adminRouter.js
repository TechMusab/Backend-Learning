const express = require('express');
const path = require('path');
const rootDir = require('../utils/path.js');
const adminRouter=express.Router();

adminRouter.get('/add-home',(req,res)=>{
res.render('addhome',{title: 'Add Home'});
});
let registeredhomes=[];
adminRouter.post('/add-home',(req,res)=>{
registeredhomes.push({houseName:req.body.houseName})
res.render('success',{title: 'Home Added'});
});
exports.adminRouter=adminRouter;
exports.registeredhomes=registeredhomes;
