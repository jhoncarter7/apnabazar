
import { BsSearch} from 'react-icons/bs'
import { PiShoppingCartBold} from 'react-icons/pi'
export default function Header() {
  return (
    <div className="flex justify-between p-4 gap-4 md:gap-12 items-center md:px-7 shadow-md">
    <h1 className="text-lg sm:text-2xl font-bold leading-none"><span className="text-orange-500">Apana</span><span className="text-green-500">BAZAAR</span></h1>
    <form className="flex  w-full justify-center border max-w-lg rounded-lg p-2 px-4">
      <input type="text" placeholder="Search you Product.." className="  text-sm focus:outline-none text-slate-600  w-full max-w-lg"/>
     <button className=''>
     <BsSearch className=''/>
     </button>
      </form>
    <div>
      <button className="text-slate-700">Login</button>
    </div>
    <div className=" items-center gap-2 bg-green-600 text-white font-bold p-1 rounded-lg sm:p-3 hidden sm:flex cursor-pointer">
      <PiShoppingCartBold className='text-lg md:text-2xl'/>
      <p className='text-sm md:text-lg'>Cartitem</p>
    </div>
  </div>
  )
}
