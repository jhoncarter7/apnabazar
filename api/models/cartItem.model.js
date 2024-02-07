import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true
  },
  
  title: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1
    
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
  imageUrl:{
    type: String,
    required: true,
  }
});

const cartSchema = new mongoose.Schema({
  CartItems: [cartItemSchema],
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
