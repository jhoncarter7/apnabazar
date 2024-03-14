import { useEffect, useState } from "react"
import ProductsCard from "../../components/ProductsCard"

export default function BabyCare() {
  const [productsData, setProductData] = useState([])
  useEffect( ()=>{
    const fetchsubCategoies = async() =>{
      const res = await fetch('/api/categories/BabyCare')
      const data = await res.json()
       setProductData(data)
    }
    fetchsubCategoies()
},[])
  return (
    <div className="p-6 ">
      <h2 className="text-xl text-gray-600">buy Baby Care Products</h2>
      <div className="flex flex-wrap gap-5 ">
        {productsData.map((product)=>  <ProductsCard key={product._id} prodId={product._id} title={product.title} oldPrice={product.oldPrice} newPrice={product.newPrice} imageUrl={product.imageUrl}/>)}
      </div>
    </div>
  )
}
