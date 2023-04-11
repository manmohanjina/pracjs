const express = require("express");
const { handelGetRouter, handelGetSingleRouter, handelAddPostRouter, handelDelPostRouter, handelUpdatePostRouter } = require("../routerController/handelpostRouterController");
const { validation } = require("../middleware/authMiddleware");
const getRoute=express.Router()
getRoute.use(express.json())


getRoute.get('/',handelGetRouter)

getRoute.use(validation)
getRoute.delete('/del/:id',handelDelPostRouter)
getRoute.get('/single/:id',handelGetSingleRouter)
getRoute.patch('/update/:id',handelUpdatePostRouter)
getRoute.post('/add',handelAddPostRouter)

 

module.exports={
    getRoute
}