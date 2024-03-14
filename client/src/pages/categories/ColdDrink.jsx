import { useEffect, useState } from "react"
import ProductsCard from "../../components/ProductsCard"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export default function ColdDrink() {
    
  const [productsData, setProductData] = useState([])
  useEffect( ()=>{
    const fetchsubCategoies = async() =>{
      const res = await fetch('/api/categories/coldDrink')
      const data = await res.json()
       setProductData(data)
    }
    fetchsubCategoies()
},[])
  return (
    <div className="p-6 ">
      <h2 className="text-xl text-gray-600">buy Colddrink</h2>
      <div className="flex flex-wrap gap-5  ">
        {productsData.map((product)=>  <ProductsCard key={product._id} prodId={product._id} title={product.title} oldPrice={product.oldPrice} newPrice={product.newPrice} imageUrl={product.imageUrl}/>)}
      </div>
      <ToastContainer position="bottom-right" theme= "dark" hideProgressBar stacked/>
    </div>
  )
}
