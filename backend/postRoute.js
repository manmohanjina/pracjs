

const express=require('express')

const postData=express.Router()
postData.use(express.json())
const fs=require('fs')


postData.post('/addData',(req,res)=>{
    const payload=req.body

    let data=JSON.parse(fs.readFileSync('./text.json',"utf-8"))

    data.data.push(payload)

    data=JSON.stringify(data)
    fs.writeFileSync('./text.json',data)

    res.send('ok')
   

})

module.exports={
    postData
}
