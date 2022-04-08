const mongoose = require("mongoose");

const musics = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  singer :{
    type:String,
    required:true,
  },
  kind:{
      type:String,
  },
  description:{
      type:String,
  }
});


const Music = mongoose.model("Music", musics);

module.exports = Music;