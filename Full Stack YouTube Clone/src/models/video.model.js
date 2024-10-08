import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema =new mongoose.Schema({
    videoFile:{
        type:String,
        required:true,
    },
    videoTitle:{
        type:String,
        required:true,
    },
    videoDescription:{
        type:String,
        required:true,
    },
    duration:{
        type:Number,
        required:true,
    },
    videoThumbnail:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        required:true,
    },
    isPublished:{
        type:Boolean,
        required:true,
        default:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
},
{
    timestamps:true
}
)
videoSchema.plugin(mongooseAggregatePaginate);
export const video=mongoose.model("video",videoSchema);