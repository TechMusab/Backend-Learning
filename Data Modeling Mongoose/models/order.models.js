import mongoose from "mongoose";
const orderitemsSchema = new mongoose.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }
}, {
    timestamps: true,
})
const orderSchema=new mongoose.Schema({
price:{
    type:Number,
    required:true,
},
customer:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
},
orderitems:{
    type:[orderitemsSchema]
},
address:{
    type:String,
    required:true,
},
orderStatus:{
    type:String,
    enum:['pending','completed','cancelled'],
    default:'pending',
}
},{timestamps:true});
export const Order=mongoose.model("Order",orderSchema);