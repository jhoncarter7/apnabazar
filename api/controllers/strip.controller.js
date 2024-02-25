import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config()
const stripPay = new Stripe(process.env.STRIPE_SECRET_KEY);

const YOUR_DOMAIN = "http://localhost:5173";

const stripGateway = async (req, res) => {
  const products = req.body;

  const line_items = products.map((product) => {
    return {
      price_data: {
        currency: "inr",
        product_data: {
          name: product.title,
        },
        unit_amount: parseInt(product.newPrice * 100),
      },
      quantity: product.quantity,
    };
  });
  console.log("line_items", line_items);
  try {
    const session = await stripPay.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${YOUR_DOMAIN}/paymentsuccess`,
      cancel_url: `${YOUR_DOMAIN}/paymentcanceled`,
      line_items: line_items,
    //   billing_address_collection: "required",
    });

    res.json(session);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default stripGateway;
