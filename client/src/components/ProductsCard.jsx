
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
export default function ProductsCard({prodId, title, oldPrice, newPrice, imageUrl}) {
  const {currentUser} = useSelector(state => state.user)
  // const [cartprod, setCartProd] = useState()





  
    const addcartProd = async (itemId) => {
      try {
        const res = await fetch('/api/cart/addAndUpdateProductToCart', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({userId: currentUser._id, productId: itemId, quantity: 1})
        })
        if(!res.ok){
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json()
  
        if(data.status === false){
          console.log(data.message)
          return;
        }
        console.log("item added to Cart ")
     
      } catch (error) {
        console.log(error)
    
      }
      // setItemId(null)
    }
   
    


  
  // console.log(cartprod)
  return (
    <div className="w-[65vw]  md:w-[42vw] lg:w-[18vw] shadow-md p-[2vw] rounded-lg">
      <img className="h-[26vh]" src={imageUrl[0]} alt="image is here" />
      <p className="text-xs text-gray-700">6 mins</p>
      <h3 className="text-sm">{title} </h3>
      <p className="text-gray-600 font-light">500g</p>
      <div className="flex justify-between">
        <div>
          <p className="text-xs">{newPrice}</p>
          <p className="text-xs text-gray-600 line-through items-center">{oldPrice}</p>
        </div>
       {

       }
        <button className="border-2 px-8 border-green-500 rounded-md bg-green-100 text-green-500 font-semibold cursor-pointer" onClick={()=> addcartProd(prodId) }>ADD</button>
      </div>
    </div>
  );
}
