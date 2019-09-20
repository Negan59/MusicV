const m = require('../models/music')
const ObterMusicas = async(aux)=>{
    console.log('ta entrando aqui, só não tem nada ainda 2')
    let c =  await m.count({validation: true},(err,music)=>{
        let aux = music
        console.log(aux)
        
       
    })
    console.log('teste = ' +c)
    aux = c
    console.log(aux)

    
 }
 module.exports = {ObterMusicas}