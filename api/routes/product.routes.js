import express from 'express'
import { addProduct, getCategoriesProducts } from '../controllers/product.controller.js'
import {userVerify} from '../utils/userVerify.js'
const route = express.Router()

route.post('/admin/:userId', userVerify, addProduct)
route.get('/categories/:subCategories', getCategoriesProducts)
export default route;