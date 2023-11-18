import Productlist from "../models/productList.models.js"

export const addProduct = async (req, res, next)=>{
    // const {title, categories, subCategories, description, oldPrice, newPrice, imageUrl, userRef} = req.body
    try {
        const product = await  Productlist.create(req.body)
        res.status(200).json(product)
        
    } catch (error) {
        next(error)
    }
};