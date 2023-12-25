
import { BsSearch} from 'react-icons/bs'
import { PiShoppingCartBold} from 'react-icons/pi'
import { Link } from 'react-router-dom'
import {useSelector} from "react-redux"
import {persistor} from "../redux/store.js"
export default function Header() {
  const {currentUser} = useSelector((state)=> state.user)
 const signOutHandler = async()=>{  
     try {
      const res = await fetch('api/auth/signout')
      const data = await res.json()
      console.log(data)
      if(data.success === false){
        return;
      }
      persistor.purge()
      window.location.reload()
     } catch (error) {
      console.log(error)
     }

 }

  return (
    <div className="flex justify-between p-4  gap-4 md:gap-12 items-center md:px-7 shadow-md">
      <Link to={'/'}>
    <h1 className="text-lg sm:text-2xl font-bold leading-none"><span className="text-orange-500">Apana</span><span className="text-green-500">BAZAAR</span></h1>
      </Link>
    <form className="flex  w-full justify-center border max-w-lg rounded-lg p-2 px-4">
      <input type="text" placeholder="Search you Product.." className="  text-sm focus:outline-none text-slate-600  w-full max-w-lg"/>
     <button className=''>
     <BsSearch className=''/>
     </button>
      </form>
    <Link to={'/signin'}>
     {currentUser ? <button className="text-slate-700" onClick={signOutHandler}>Logout</button> :
      <button className="text-slate-700">Login</button>}
    </Link>
    <Link to={`/admin/addProduct/${currentUser?._id}`}>
    <button className='min-w-[7rem] hidden md:flex'>Become a seller</button>
    </Link>
    <div className=" items-center gap-2 bg-green-600 text-white font-bold p-1 rounded-lg sm:p-3 hidden sm:flex cursor-pointer">
      <PiShoppingCartBold className='text-lg md:text-2xl'/>
      <p className='text-sm md:text-lg hidden md:flex'>Cartitem</p>
    </div>
  </div>
  )
}
