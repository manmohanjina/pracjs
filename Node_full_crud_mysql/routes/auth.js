
const express=require('express');
const { handelRegisterUserController, handelLoginUserController, handleLogoutUserController } = require('../routerController/handelAuthController');
const { validation } = require('../middleware/authMiddleware');

const registerRoute=express.Router();
// registerRoute.use(express.json());

registerRoute.post('/register',handelRegisterUserController)




registerRoute.post('/login',handelLoginUserController)

registerRoute.post('/logout',handleLogoutUserController)


module.exports={registerRoute}