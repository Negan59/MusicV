const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/musicV'
mongoose.connect(url,{useNewUrlParser: true})

let db = mongoose.connection

module.exports = db