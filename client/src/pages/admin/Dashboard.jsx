import AddProduct from "../../components/AddProduct";
import {Link} from 'react-router-dom'
export default function Dashboard() {
  return (
    <div className="flex">
      
      <div className=" w-2/6 md:w-1/6 shadow-lg md:ml-10 mt-10  text-center pt-4">
        <ul className="text-gray-600 flex flex-col gap-4">
          <li className="font-semibold text-lg">
            Dashboard
          </li>
          <Link to={'/admin/dashboard/g'}>
          <li className="cursor-pointer">
            Add Product
          </li>
          </Link>
          <Link  to={'/admin/productlist/g'}>
          <li className="cursor-pointer">
            Product List
          </li>
          </Link>
          <Link  to={'/admin/'}>
          <li className="cursor-pointer">
           Edit Product
          </li>
          </Link>
        </ul>
      </div>
      <AddProduct/>
    </div>
  )
}
