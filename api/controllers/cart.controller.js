import Cart from "../models/cartItem.model.js"
import { errorHandler } from "../utils/error.js"


export const getCartProduct = async(req, res, next) =>{
    const {userRef} = req.body
    try {
        const cartItem = await Cart.find(userRef)
        res.status(200).json(cartItem)
    } catch (error) {
        next(error)
    }
}
   export const addProductToCart = async(req, res, next) => {
      
 try {
    const addItem = await Cart.create(req.body)
    res.status(201).json(addItem)
} catch (error) {
    next(error)
}
}

    export const updateCartItem = async (req, res, next) => {
  
    const cartItem = await Cart.findById(req.params.itemId)
    if(!cartItem) return next(errorHandler(404, 'Item not found'))
    if(req.user.id !== cartItem.userRef) return next(errorHandler(404, "you can only update your own item"))
  
    try {
      const updateItem  = await Cart.findByIdAndUpdate({_id: req.params.itemId}, req.body, {new: true} )   
      res.status(200).json(updateItem)                                                                                

    } catch (error) {
        next(error)
}

    
}