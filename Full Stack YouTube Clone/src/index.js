import dotenv from "dotenv"
import connectdb from "./db/db.js";
dotenv.config({
    path:"./env"
})
connectdb();

//Second Approach
// import express from "express";
// const app= express();
// (async ()=>{
// try{
// await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
// app.on('error',(e)=>{
//     console.log('error',e);
// })
// app.listen(process.env.PORT,()=>[
//     console.log('server is running on port',process.env.PORT)
// ])
// }
// catch(e){
//     console.log(e);
// }
// })();