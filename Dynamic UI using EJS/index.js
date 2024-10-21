const express = require('express');
const path = require('path');
const userRouter = require( './routes/userRouter.js');
const {adminRouter} = require('./routes/adminRouter.js');
const rootDir = require('./utils/path.js');
const app=express();
app.use(express.static(path.join(rootDir, 'public')))
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended:true}));
//we can also give common paths
app.use(userRouter);
app.use(adminRouter);
app.use((req,res,next)=>{
    res.status(404).render('404',{title:'404'});
})
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});