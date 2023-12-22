import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import ProductsCard from "../../components/ProductsCard";
import { useSelector } from "react-redux";

export default function ProductList() {
  const {currentUser} = useSelector(state => state.user)
  const [productLists, setproductLists] = useState()
  useEffect(()=>{
   const listOfProduct = async()=>{
     try {
      const res = await fetch(`/api/getSellerProduct/${currentUser._id}`)
      const data = await res.json()
      if(data.status === false){
        console.log(data.status)
       return;
      }
      setproductLists(data)
     } catch (error) {
      console.log(error)
     }
   }
   listOfProduct()
  },[currentUser._id])
  return (
    <main className="flex justify-between gap-3 md:gap-8">
      <Dashboard className='self-start'/>
     <div  className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden gap-y-4">
      {productLists?  productLists.map((product)=> <ProductsCard key={product._id} title={product.title} oldPrice={product.oldPrice} newPrice={product.newPrice} imageUrl={product.imageUrl}/>): <h4>No Product Listed!</h4>}
     </div>
    </main>
  )
}
