
const handelgetRouter=(req,res)=>{
    
    try {
        res.send('ok')
    } catch (error) {
        console.log(error)
        res.status(400).send({"error":"error while fetching details /get "})
    }
}


module.exports={
    handelgetRouter
}