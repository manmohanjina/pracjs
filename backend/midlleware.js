
const mw=(req,res,next)=>{
    
    if(req.query.pass=="5656")
    next()
    else{
        res.send('u r not authorised')
    }
}

module.exports={mw}