const express = require("express");
const getRoute=express.Router()
const {handelgetRouter}=require('../routerController/handelpostRouterContrller')

getRoute.get('/',handelgetRouter)




module.exports={
    getRoute
}