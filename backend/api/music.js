const m = require('../models/music')
const {authSecret} = require('../.env')
const jwt = require('jwt-simple')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})
module.exports = app=>{
    
    const getU = async(req,res)=>{
      await m.find({validation:false},(err,musics)=>{
        console.log(musics)
        if(err){
            return res.json({erro:'não há nenhum usuário!!!'})
        }
        else{
            return res.status(200).send(musics)
        }
    })
           
    }
    const getV = async(req,res)=>{
        console.log('ta entrando aqui, só não tem nada ainda')
        await m.find({validation: true},(err,music)=>{
            if(err){
              return res.status(500).send('Não existe nenhuma música permitida')
            }
            else{
              return res.status(200).send(music)
            }
        })
     }

     const remove = async(req,res)=>{
         m.remove({_id: req.params._id},(err,doc)=>{
             console.log(req.params._id)
             console.log(doc)
            if(doc.n ===0){
                  return res.status(400).send('não é possível remover!')
              }
              else return res.status(204).send('Usuário removido com sucesso')
          })
     }
    const save = async(req,res)=>{
      m.findByIdAndUpdate({_id: req.params._id},{validation: true}).then(()=>console.log('atualizado com sucesso'))
    }
 
 return {getU,getV,remove,save}

}