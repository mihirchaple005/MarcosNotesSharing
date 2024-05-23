import mongoose from "mongoose";

const noteModel=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    username:{
        type:mongoose.ObjectId,
        ref:"user",
        required:true
    },
    slug:{
        type:String,
        required:true,
      },
    cloud_link:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    branchname:{
        type:String,
        required:true
    }
},{timestamps:true})
export default mongoose.model('notes',noteModel)