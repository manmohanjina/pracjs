
const mongoose=require('mongoose')
require('dotenv').config()
const main=async()=>{
    try {
        const connection=await mongoose.connect(process.env.url)
        console.log('connected to server')
       
    } catch (error) {
        console.log('error while connecting to server')
    }
}


module.exports={
    main
}