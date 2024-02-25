import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { loadStripe } from "@stripe/stripe-js";
CartTotal.propTypes = {
  cartProduct: PropTypes.array.isRequired,
};
function CartTotal({ cartProduct }) {
  const [sumOfTotalCartItem, setSumOfTotalCartItem] = useState();
  console.log("public key", process.env.REACT_APP_STRIPE_PUBLIC_KEY)
  useEffect(() => {
    const total = cartProduct?.reduce((acc, product) => {
      return (acc += Number(product.quantity * product.newPrice));
    }, 0);

    setSumOfTotalCartItem(total);
  }, [cartProduct]);

  const checkOut = async (products) => {
    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    console.log("public key", process.env.REACT_APP_STRIPE_PUBLIC_KEY)
    const response =  await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(products),
    });
    const session = await response.json(); 

    const result = stripe.redirectToCheckout({ 
      sessionId: session.id, 
    }); 
 
    if (result.error) { 
      console.log(result.error); 
    } 

}
  const shippingCharge = sumOfTotalCartItem < 500 ? 50 : 0;
  const taxCharge = sumOfTotalCartItem > 1000 ? 60 : 0;

  return (
    <div className="lg:w-2/6 bg-[#1C1B1B] text-white p-4 rounded-lg flex flex-col  gap-6">
      <h1 className="font-bold text-2xl">Cart Total</h1>
      <div className="flex justify-between font-semibold text-lg">
        <p>SubTotal</p>
        <p>₹{sumOfTotalCartItem}</p>
      </div>
      <hr />
      <div className="flex flex-col gap-4 font-semibold">
        <div className="flex justify-between ">
          <p className="flex flex-col">
            Shipping Charge
            <span className="text-xs">(apply below ₹500)</span>
          </p>
          <p>₹{shippingCharge}</p>
        </div>

        <div className="flex justify-between ">
          <p className="flex flex-col">tax
            <span className="text-xs">(apply above ₹1000)</span>
          </p>

          <p>₹{taxCharge}</p>
        </div>
      </div>
      <hr />
      <div className="flex justify-between font-semibold">
        <p>Order Total</p>
        <p>₹{sumOfTotalCartItem + taxCharge + shippingCharge}</p>
      </div>
      <button onClick={()=>checkOut(cartProduct ? cartProduct : [])} className="bg-white text-black rounded-md p-4 font-semibold">
        Continue to Payment
      </button>
    </div>
  );
}

export default CartTotal;
