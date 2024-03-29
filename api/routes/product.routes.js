import express from 'express'
import { addProduct, deleteSellerProduct, getCategoriesProducts, getSellerProducts, getSingleProduct, updateSellerProduct } from '../controllers/product.controller.js'
import {userVerify} from '../utils/userVerify.js'
import { getCartProduct, addAndUpdateProductToCart, removeCartProduct, updateProductFromCart } from '../controllers/cart.controller.js'
import stripGateway from '../controllers/strip.controller.js'
const route = express.Router()

route.post('/admin/:userId', userVerify, addProduct)
route.get('/categories/:subCategories', getCategoriesProducts)
route.get('/getSellerProduct/:userId', userVerify, getSellerProducts)
route.post('/updateSellerProduct/:itemId', userVerify, updateSellerProduct)
route.get('/DeleteSellerProduct/:itemId', userVerify, deleteSellerProduct)
route.get('/getSingleProduct/:itemId',userVerify, getSingleProduct)
route.get('/cart/getCartProduct/:userId', userVerify, getCartProduct)
route.post('/cart/addAndUpdateProductToCart', userVerify, addAndUpdateProductToCart)
route.post('/cart/updateProductFromCart', userVerify, updateProductFromCart)
route.get('/cart/removeCartProduct/:userId/:productId', userVerify, removeCartProduct)
route.post('/create-checkout-session', userVerify, stripGateway)

export default route;