const {authSecret} = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const u = require('../models/usuario')
module.exports = app=>{
    const signin = async(req,res)=>{
        if(!req.body.email || !req.body.password){
            return res.status(400).send('informe usuário e senha')
        }
        
        u.find({email: req.body.email},(err,user)=>{
            let t = {email: user[0]}
            console.log(t)
            if(t.email === undefined){
                console.log('não ta')
                return res.status(400).send('Usuário não existe')
            }
        console.log(user)
        const isMatch = bcrypt.compareSync(req.body.password,user[0].password)
        if(!isMatch)return res.status(401).send('senha inválida')
        const now = Math.floor(Date.now()/1000)
        const payload = {
            name: user[0].name,
            email: user[0].email,
            admin: user[0].admin,
            iat: now,
            exp: now + (60*60*24*5)
        }
        res.json({
            ...payload,
            token: jwt.encode(payload,authSecret)
        })
        })
        
    }
    const validateToken = async (req, res) => {
        const userData = req.body || null
        console.log(userData)
        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {
            // problema com o token
        }

        res.send(false)
    }
    return {signin,validateToken}
}