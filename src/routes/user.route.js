import express from 'express'
import userController from '../controllers/user.controllers.js'
import { validId, validUser } from "../middlewares/global.middlewares.js"

const router = express.Router()

router.post('/create', userController.create) 
router.get('/users', userController.findAll) 
router.get('/:id', validId , validUser, userController.findById) 
router.patch('/:id', validId , validUser, userController.update)
router.delete('/:id', validId, validUser, userController.deleteUser)

export default router;