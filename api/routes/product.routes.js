import express from 'express'
import { addProduct } from '../controllers/product.controller.js'

const route = express.Router()

route.post('/admin/:productid', addProduct)

export default route;