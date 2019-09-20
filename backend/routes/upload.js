const multer = require('multer')
let storage = multer.diskStorage({
  destination: function(req,file, cb){
    cb(null, 'public/uploads')
  },
  filename: function(req,file,cb){
    console.log(file)
    console.log(file.originalname)
    let ext = file.originalname.substr(file.originalname.lastIndexOf('.')+1)
    cb(null, file.originalname + '-'+Date.now()+'.'+ext)
  }
})
const upload = multer({
    storage: storage
})
const m = require('../models/music')
const {authSecret} = require('../.env')
const jwt = require('jwt-simple')
module.exports = app=>{
app.post('/upload/:artist/:name', upload.single('file'), async(req,res)=>{
    let userData1 = req.headers.authorization
    let userData = {token:userData1.substring(7)}
    let token = jwt.decode(userData.token, authSecret)
    console.log(req.file)
    let musica = {name: req.params.name,artist: req.params.artist,music: req.file.path}
    console.log(req.params.artist)
    console.log(req.params.name)
    console.log(musica)
        if(token.admin === true){
          musica.validation = true
          console.log(musica)
          const newmusic = new m(musica)
          console.log(newmusic)
           
           newmusic.save().then(() => res.send('[Stats] Estatíticas atualizadas!'))
            
        
        }
        else{
          musica.validation = false
          const newmusic = new m(musica)
          newmusic.save().then(() => res.send('[Stats] Estatíticas atualizadas!'))

        }
    
    //return res.json({file:req.file})
})
}