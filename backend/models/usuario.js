const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    email:{
        type: String,
        lowercase: true,
        unique: true,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    },
    admin:{
        type:Boolean,
        required: true
    },
},
    {
     timestamps:true
    })

module.exports = mongoose.model('User', userSchema);