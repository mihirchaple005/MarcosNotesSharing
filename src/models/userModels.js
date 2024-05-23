import mongoose from "mongoose";


//user-details initialisation
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    semester:{
        type:Number,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        length:8
    },
    user_type:{
        type:Number,
        default:0
    },
    image:{
        data:Buffer,
        contentType:String
    }
},{timestamps:true});

export default mongoose.model('user',userSchema);