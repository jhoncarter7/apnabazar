
import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
      CartItem:{
        type: Array,
        require: true
      },

      userRef:{
        type: String,
        require: true
      },
      
})

const Cart = mongoose.model('Cart', cartSchema)
export default Cart;