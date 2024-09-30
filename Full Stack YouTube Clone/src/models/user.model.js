import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
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
userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();
this.password=bcrypt.hashSync(this.password,10);
next();
})
userSchema.methods.isPassowordcorrect=async function(){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateToken=function(){
    
    jwt.sign({
        _id:this.id,
        username:this.username,
        email:this.email,
        
    })
}
userSchema.methods.generateRefrestToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{expiresIn:"7d"});
}
export const User=mongoose.model("User",userSchema);