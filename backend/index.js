const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

app.db = mongoose



consign()
 .include('./config/passport.js')
 .then('./config/middlewares.js')
 .then('./routes')
 .then('./api')
 .then('./config/routes.js')
 .into(app)


app.listen(4000, () =>{
    console.log('servidor esta executando na porta 4000')
})