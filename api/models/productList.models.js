import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  categories: {
    type: String,
    required: true,
  },
  subCategories: {
    type: String,
    required: true,
  },

  oldPrice: {
    type: Number,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: Array,
    required: true,
  },
  userRef:{
    type: String,
    required: true
  }
}, {timestamps: true});

 const Productlist = mongoose.model('Productlist', productSchema)
 export default Productlist;