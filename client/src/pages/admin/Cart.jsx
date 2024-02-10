import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartTotal from "./CartTotal";

export default function Cart() {
  const [cartProduct, setCartProduct] = useState();
  const { currentUser } = useSelector((state) => state.user);
  const [itemId, setItemId] = useState();

  const getcartItems = async () => {
    try {
      const res = await fetch(`/api/cart/getCartProduct/${currentUser._id}`);
      const data = await res.json();

      if (data.status === false) {
        console.log("coludn't get your cart item");
        return;
      }

      setCartProduct(data.CartItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getcartItems();
  }, [setCartProduct, currentUser]);

  const removeCartItem = async (productId) => {
    try {
      const res = await fetch(
        `/api/cart/removeCartProduct/${currentUser._id}/${productId}`
      );
      const data = await res.json();

      if (data.status === false) {
        console.log("coludn't remove your cart item");
        return;
      }
      getcartItems();
      console.log("successfully removed");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = async (event) => {
    const valueNu = event.target.value;
    try {
      const res = await fetch("/api/cart/updateProductFromCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser._id,
          productId: itemId,
          quantity: valueNu,
        }),
      });
      console.log("res", res)
      const data = await res.json();
    
      if (data.status === false) {
        console.log(data.message);
        return;
      }
     console.log("item updated successfully")
    setCartProduct(data.CartItems)
    } catch (error) {
      console.log(error);
    }

    // setProduct({...product, quantity: valueNu})
  };


  return (
    <div className="flex md flex-col lg:flex-row p-4 pt-10 pl-2 md:px-20 gap-16">
      {/* left side */}
      <div className="flex-1">
        <h3 className="font-semibold text-2xl pb-6">Your Cart</h3>
        <div className="hidden lg:grid grid-cols-8 font-semibold text-gray-600 justify-between pb-3">
          <h4 className="col-span-5">Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
        </div>
        <hr />
        {/* single product */}
        {cartProduct ? (
          cartProduct.map((product) => (
            <div className="" key={product._id}>
              {/* {console.log(product.title)} */}

              <div className="">
                {/*  */}
                <div className="grid col-span-6  md:grid-cols-8  w-full self-center gap-1 md:gap-6 lg:gap-0 pb-2">
                  <div className="flex gap-4 col-span-3 md:col-span-5">
                    <img
                      src={product.imageUrl}
                      alt=""
                      className="w-24 h-24 self-center"
                    />
                    <div className="self-center">
                      <p>{product.title} </p>
                      <p></p>
                    </div>
                  </div>
                  <p className="self-center pl-10 md:pl-0">
                    {product.newPrice}
                  </p>
                  <select
                    name="listofnum"
                    id="listofnum"
                    className="self-center overflow-auto scroll-m-0 scroll-p-0 h-8 w-14 rounded-lg text-center bg-white border-2"
                    size="1"
                    value={product.quantity}
                    onChange={handleSelectChange}
                    onClick={() => setItemId(product.productId)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>

                  <button
                    className="self-center "
                    onClick={() => removeCartItem(product.productId)}
                  >
                    delete
                  </button>
                </div>
                <hr />
              </div>
            </div>
          ))
        ) : (
          <h1>product not found</h1>
        )}
      </div>
      {/* right side */}

      <CartTotal cartProduct={cartProduct} />
    </div>
  );
}
