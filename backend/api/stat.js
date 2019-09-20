const m = require('../models/music')
const u = require('../models/usuario')
const s = require('./estatisticas')
module.exports = app=>{
    const stat = app.db.model('Stat',{
        users:Number,
        musics: Number,
        createdAt: Date
    })
    const get = async(req, res) => {
        let a = 0
        let c =  await m.count({validation: true},(err,music)=>{})
        console.log('isso : '+c)
        let d = await u.count({},(err,user)=>{})
        console.log(d)
        let st = {users: d,musics: c}
        res.send(st)
        
    }

    return { stat, get }
}