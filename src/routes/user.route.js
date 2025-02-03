const route = require('express').Router()
const userController = require('../controllers/user.controllers')

route.post('/', userController.create) 
route.get('/', userController.findAll) // 
route.get('/:id', userController.findById) //


module.exports = route;