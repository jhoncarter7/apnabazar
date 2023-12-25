import express from 'express'
import { addProduct, getCategoriesProducts, getSellerProducts, getSingleProduct, updateSellerProduct } from '../controllers/product.controller.js'
import {userVerify} from '../utils/userVerify.js'
const route = express.Router()

route.post('/admin/:userId', userVerify, addProduct)
route.get('/categories/:subCategories', getCategoriesProducts)
route.get('/getSellerProduct/:userId', userVerify, getSellerProducts)
route.post('/updateSellerProduct/:itemId', userVerify, updateSellerProduct)
route.get('/getSingleProduct/:itemId',userVerify, getSingleProduct)
export default route;