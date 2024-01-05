import Cart from "../models/cartItem.model.js"


export const getCartProduct = async(req, res, next) =>{
    const {userRef} = req.body
    try {
        const cartItem = await Cart.find({userRef})
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