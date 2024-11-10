import mongoose from "mongoose";

const JournalSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId if referencing another model
        ref: 'User',                          // Reference the 'User' model (optional)
        required: true,
        trim: true,
    },
    content:{
        type:String,
        required:true,
        trim:true,
    }
},{timestamps:true})

const Journal = mongoose.model("Journal",JournalSchema);
export default Journal;