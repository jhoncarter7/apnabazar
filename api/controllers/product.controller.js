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

export const getCategoriesProducts = async(req, res, next) => {
const {subCategories} = req.params
console.log(subCategories)
try {
    const subCategoriesList = await Productlist.find({subCategories})
   res.status(200).json(subCategoriesList)
} catch (error) {
    next(error)
}
}