import Cart from "../models/cartItem.model.js";
import Productlist from "../models/productList.models.js";
import { errorHandler } from "../utils/error.js";

export const getCartProduct = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const cartItem = await Cart.findOne({ userId });

    res.status(200).json(cartItem);
  } catch (error) {
    errorHandler(error.status, "Item not found");
  }
};

export const addAndUpdateProductToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  if (!userId || !productId || !quantity) {
    return res.status(400).json({ error: "Invalid request parameters" });
  }

  try {
    let userCart = await Cart.findOne({ userId });

    if (!userCart) {
      // Create a new cart for the user if it doesn't exist
      userCart = new Cart({ userId, CartItems: [] });
    }

    // Add item to the user's cart
    const existingItemIndex = userCart.CartItems.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex !== -1) {
      // Update quantity if item already exists in the cart
      userCart.CartItems[existingItemIndex].quantity += quantity;
    } else {
      // Add a new item to the cart
      const product = await Productlist.findById(productId);

      if (product) {
        const { title, newPrice, oldPrice, imageUrl } = product;

        userCart.CartItems.push({
          productId,
          title,
          newPrice,
          oldPrice,
          imageUrl: imageUrl[0],
        });
      } else {
        console.log("product can't be add in cart");
      }
    }

    // Save the cart to the database
    await userCart.save();

    res.status(200).json({ message: "Item added to the cart successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
