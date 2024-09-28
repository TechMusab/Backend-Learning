import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectdb=async ()=>{
    try{
       const connection= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
      console.log(`\n MONGODB Connected !! DB HOST:${
        connection.connection.host
      }`);

    }
    catch(e){
        console.log("Mongo DB Connection failed",e);
        process.exit(1);
    }
}
export default connectdb;