import mongoose from "mongoose"

const reviewModel=new mongoose.Schema({
    review:{
        type:String,
    },
    note_title:{
        type:mongoose.ObjectId,
        ref:"notes",
        required:true
    },
    username:{
        type:mongoose.ObjectId,
        ref:"user",
        required:true
    },
    rating:{
        type:Number,
        default:0
    }
});
export default mongoose.model("review",reviewModel);