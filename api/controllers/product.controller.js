import Productlist from "../models/productList.models.js"

export const addProduct = async (req, res, next)=>{
    // const {title, categories, subCategories, description, oldPrice, newPrice, imageUrl, userRef} = req.body
    try {
        const product = await  Productlist.create(req.body)
        res.status(201).json({product: product, message: "Product added successfully"})
        
    } catch (error) {
        next(error)
    }
};

export const getCategoriesProducts = async(req, res, next) => {
const {subCategories} = req.params
try {
    const subCategoriesList = await Productlist.find({subCategories})
   res.status(200).json(subCategoriesList)
} catch (error) {
    next(error)
}
}

export const getSellerProducts = async(req, res, next)=>{
    const userRef = req.params.userId
try {
    // find must be an object
    const sellerProduct = await Productlist.find({userRef})
    res.status(200).json(sellerProduct)
} catch (error) {
    next(error)
}
}
export const getSingleProduct  = async (req, res, next)=>{
    try {
        const singleProduct = await Productlist.findById({_id: req.params.itemId})
        res.status(200).json(singleProduct)
    } catch (error) {
        next(error)
    }
}
export const updateSellerProduct = async(req, res, next)=>{
    const listing = await Productlist.findById(req.params.itemId);
    if (!listing) return next(errorHandler(404, "listing not found"));
    if (req.user.id !== listing.userRef)
      return next(errorHandler(401, "You can only update your own listing"));
   try {
     const updateProduct = await Productlist.findByIdAndUpdate({_id:req.params.itemId}, req.body, {new: true})
     res.status(200).json(updateProduct)
   } catch (error) {
    next(error)
   }
}
export const deleteSellerProduct = async(req, res, next)=>{
    const listing = await Productlist.findById(req.params.itemId);
    console.log(listing)
    if (!listing) return next(errorHandler(404, "listing not found"));
    if (req.user.id !== listing.userRef)
      return next(errorHandler(401, "You can only delete your own listing"));
   try {
     const updateProduct = await Productlist.findByIdAndDelete({_id:req.params.itemId})
     res.status(200).json({message: "Product deleted successfully"})
   } catch (error) {
    next(error)
   }
}