const mongoose = require('mongoose')
const schema = mongoose.Schema


const musicSchema = new schema({
    name:{
        type:String,
        required:true,
        unique:true
        
    },
    artist:{
        type:String,
        required:true
    },
    music:{
        type:String,
        required:true
    },
    /*photo:{
        type:String,
        required:true
    },*/
    validation:{
        type: Boolean,
        required: true
    },
},
 { 
    timestamps:true
})

  module.exports = mongoose.model('Music',musicSchema)