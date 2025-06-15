const mongoose = require("mongoose");
const videoSchema = new mongoose.Schema({
    user:{
    
           type: mongoose.Schema.Types.ObjectId, 

        ref:"user",
        required:true
    },
    description:{
        type:String,
    },

    title:{
        type:String,
        require:true,
    },

    videoLink:{
        type:String,
        required:true,
    },

    thumbnail:{
        type:String,
        required:true,
    },
    videoType:{
        type:String,
        required:true
    },
    like:{
       type:String,
       default:"All"
    },

    dislike:{
        type:String,
        default:0
    }

} , {timestamps:true})
module.exports = mongoose.model('video',videoSchema);