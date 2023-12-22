
import {Link} from 'react-router-dom'
export default function Dashboard() {
  return (
        <ul className="text-gray-600 flex flex-col gap-4 px-5 pt-6 ">
          <li className="font-semibold text-lg">
            Dashboard
          </li>
          <Link to={'/admin/addProduct/g'}>
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
  )
}
