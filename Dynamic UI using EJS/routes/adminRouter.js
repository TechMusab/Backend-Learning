const express = require('express');
const path = require('path');
const rootDir = require('../utils/path.js');
const adminRouter=express.Router();

adminRouter.get('/add-home',(req,res)=>{
res.render('addhome',{title: 'Add Home',curr:'add-home'});
});
let registeredhomes=[];
adminRouter.post('/add-home',(req,res)=>{
registeredhomes.push({houseName:req.body.houseName,price:req.body.price,location:req.body.location,description:req.body.description});
res.render('success',{title: 'Home Added'});
});
exports.adminRouter=adminRouter;
exports.registeredhomes=registeredhomes;
