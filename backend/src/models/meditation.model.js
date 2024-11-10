import mongoose from "mongoose";

const meditationSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        trim:true,
    },
    time:{
        type:Number,
        required:true,
        default:54
    },
    date:{
        type:Date,
        default:() => new Date(), 
    }
},{timestamps:true});

const meditation = mongoose.model("meditation",meditationSchema);

export default meditation;
