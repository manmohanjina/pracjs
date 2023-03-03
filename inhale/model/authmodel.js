

const express=require('express')
const mongoose=require('mongoose')

const userAuthShema=mongoose.Schema({
  
  
    email:String,
    password:String
})

const AuthModel= mongoose.model('userauth',userAuthShema)

module.exports={
    AuthModel
}