const express = require('express');
const path = require('path');
const { registeredhomes } = require('./adminRouter.js');
const userRouter=express.Router()
userRouter.get('/',(req,res)=>{
    res.render('home',{registeredhomes,title:'home'});
});
module.exports = userRouter