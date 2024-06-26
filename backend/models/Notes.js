const mongoose = require('mongoose');

const noteSchema = new Schema({
    title:{
        type: String,
        required : true,

    },
    description:{
        type: String,
        required : true,
        
    },
    tag:{
        type: String,
        default: "general"

    }
  });

  module.exports = mongoose.model("user", noteSchema);