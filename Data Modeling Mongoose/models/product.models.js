import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
},{
    timestamps: true,
})

export const Product=mongoose.model('Product', productSchema)