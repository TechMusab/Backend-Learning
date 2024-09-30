import mongoose from "mongoose";
const userSchema =new mongoose.Schema({
username:{
type:String,
required:true,
unique:true,
},
email:{
type:String,
required:true,
unique:true,
trim:true
},
fullname:{
type:String,   
required:true,
},
avatar:{
    type:String,
    required:true,
},
coverImage:{
    type:String
},
WatchHistory:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Video"
    }
],
password:{
    type:String,
    required:[true,"Passoword is required"]
},

},
{
    timestamps:true
}

)
export const User=mongoose.model("User",userSchema);