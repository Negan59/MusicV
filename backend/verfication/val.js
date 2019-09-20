
const ValideEmailOrError = (mail,msg)=>{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){}
  
   else  throw msg
}


module.exports = {ValideEmailOrError}