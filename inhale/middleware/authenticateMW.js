
const jwt=require('jsonwebtoken')

const Authenticate=(req,res,next)=>{

const token=req.headers.authorization;
  
 jwt.verify(token,"masai",(err,decode)=>{
    if(err){
        res.send({'err':"invalid token"})
    }
    else{
        next()
    }
 })
}

module.exports={
    Authenticate
}