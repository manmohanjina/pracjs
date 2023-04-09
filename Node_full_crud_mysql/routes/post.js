const express = require("express");
const { handelGetRouter, handelGetSingleRouter, handelAddPostRouter, handelDelPostRouter, handelUpdatePostRouter } = require("../routerController/handelpostRouterController");
const getRoute=express.Router()
getRoute.use(express.json())


getRoute.get('/',handelGetRouter)
getRoute.get('/single/:id',handelGetSingleRouter)
getRoute.post('/',handelAddPostRouter)
getRoute.delete('/del/:id',handelDelPostRouter)
getRoute.patch('/update/:id',handelUpdatePostRouter)
 

module.exports={
    getRoute
}