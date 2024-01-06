import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  newPrice: {
    type: Number,
    required: true,
  },
  oldPrice: {
    type: Number,
    required: true,
  },
});

const cartSchema = new mongoose.Schema({
  CartItem: [cartItemSchema],
  total: {
    type: Number,
    required: true,
    default: 0,
  },
  userRef: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
