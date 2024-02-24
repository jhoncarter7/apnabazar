import { useEffect, useState } from "react";
import ProductsCard from "../../components/ProductsCard";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import CircularProgress from '@mui/material/CircularProgress';


export default function VegetableFruits() {
  const [productsData, setProductData] = useState([])
  useEffect( ()=>{
    const fetchsubCategoies = async() =>{
      const res = await fetch('/api/categories/veg&fruit')
      const data = await res.json()
       setProductData(data)
    }
    fetchsubCategoies()
},[])
 
  return (
    <div className="p-6 ">
      <h2 className="text-xl text-gray-600">buy Fresh Vegitables & Fruits Online</h2>
      <div className="grid  grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden gap-y-4 ">
        {productsData ? productsData.map((product)=>  <ProductsCard key={product._id} prodId={product._id} title={product.title} oldPrice={product.oldPrice} newPrice={product.newPrice} imageUrl={product.imageUrl}/>): <CircularProgress/> }
      </div>
      <ToastContainer position="bottom-right" theme= "dark" hideProgressBar stacked/>
    </div>

  )
}
