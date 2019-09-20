const bcrypt = require('bcrypt-nodejs')
const u = require('../models/usuario')
const v = require('../verfication/val')
const formidable = require('formidable')
const fs = require('fs')
module.exports = app=>{
    const EncryptPassword = password=>{
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password,salt)
    }
    const post = async(req,res)=>{
        const user = {...req.body}
        if(req.params.id) user.id = req.params.id
        if(user.admin === undefined){
            user.admin = false
        }
        try{
           v.ValideEmailOrError(user.email,'E-mail inserido com erro!')
        }catch(msg){
            return res.status(400).send(msg)
        }
        if(user.password === user.cpassword){
            user.password = EncryptPassword(user.password)
            delete user.cPassword
        }
        else{
            return res.status(400).send('As senhas não correspondem')
        }
        console.log(user)
        const newUser = new u({email: user.email,password:user.password,name:user.name,admin: user.admin})
        
        newUser.save(function(err){
            if(err){
                
                return res.status(500).send(err)
            }
            else{
                console.log('Post salvo!')
                return res.send('deu certo!!!')
            }
        })
    }
    const get = async(req,res)=>{
        await u.find({},(err,users)=>{
            if(err){
                return res.json({erro:'não há nenhum usuário!!!'})
            }
            else{
                return res.status(200).send(users)
            }
        })
        
        
    }
    const remove = async(req,res)=>{
        
          await u.remove({email: req.params.email},(err,doc)=>{
             
            if(doc.n ===0){
                  return res.status(400).send('não é possível remover!')
              }
              else return res.status(204).send('Usuário removido com sucesso')
          })
        
    }
    return {post,get,remove}
}