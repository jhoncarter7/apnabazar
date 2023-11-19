import express from 'express'
import { addProduct } from '../controllers/product.controller.js'
import {userVerify} from '../utils/userVerify.js'
const route = express.Router()

route.post('/admin/:userId', userVerify, addProduct)

export default route;