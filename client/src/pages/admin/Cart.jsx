export default function Cart() {
  return (
    <div className="flex md flex-col lg:flex-row p-4 pt-10 pl-2 md:px-20 gap-16">
      {/* left side */}
      <div className="flex-1">
        <h3 className="font-semibold text-2xl pb-6">Your Cart</h3>
        {/* single product */}
        <div className="">
          {/*  */}
          <div className="hidden lg:grid grid-cols-8 font-semibold text-gray-600 justify-between pb-3">
            <h4 className="col-span-5">Product</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
          
          </div>
          <hr />
          <div className="">
              {/*  */}
              <div className="grid col-span-6  md:grid-cols-8  w-full self-center gap-1 md:gap-6 lg:gap-0 pb-2">
                <div className="flex gap-4 col-span-3 md:col-span-5">
                  <img src="/image/atta.avif" alt="" className="w-24 h-24 self-center" />
                  <div className="self-center">
                    <p>title titletitle titletitle titletitle titletitle title </p>
                    <p>dd</p>
                  </div>
                </div>
                <p className="self-center pl-10 md:pl-0">price</p>
                <select name="listofnum" id="listofnum" className="self-center overflow-auto scroll-m-0 scroll-p-0 h-8 w-14 rounded-lg text-center bg-white border-2" size='1'>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
                
                <button className="self-center ">delete</button>
              </div>
              <hr />
            </div>
        </div>
      </div>
      {/* right side */}
      <div className="lg:w-2/6 bg-[#1C1B1B] text-white p-4 rounded-lg flex flex-col  gap-6">
        <h1 className="font-bold text-2xl">Cart Total</h1>
        <div className="flex justify-between font-semibold text-lg">
          <p>SubTotal</p>
            <p>$44</p>
        </div>
        <hr />
        <div className="flex flex-col gap-4 font-semibold">

        <div className="flex justify-between ">
          <p>Shipping
            <span>purchase over ₹ 500</span>
          </p>
            <p>$44</p>
        </div>

       
       
        <div className="flex justify-between ">
          <p>tax</p>
            <p>$44</p>
        </div>

        </div>
        <hr />
        <div className="flex justify-between font-semibold">
          <p>Order Total</p>
            <p>$44</p>
        </div>
        <button className="bg-white text-black rounded-md p-4 font-semibold">Continue to Payment</button>
      </div>
      
    </div>
  );
}
