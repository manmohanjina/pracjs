

const middlewareValidator=(req,res,next)=>{
      
    const {email,password}=req.body
   
    let t=email.indexOf('@')
    console.log(t);

   if(t!==-1 && password){
    next()
   }
   else{
    res.send({'err':"please enter valid email"})
   }
}


module.exports={middlewareValidator}