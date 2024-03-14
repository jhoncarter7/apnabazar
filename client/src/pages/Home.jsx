import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import AllCategories from "../components/AllCategories";
import { PiShoppingCartBold} from 'react-icons/pi'
import {Link} from "react-router-dom"


export default function Home() {
  const [isvisible, setisVisible] = useState(true)
  return (
    <main className="p-5 dark:text-white">
      <section className="flex flex-col md:flex-row gap-4 ">
        <aside className=" min-w-fit">
          <div className="flex items-center gap-4  p-4 px-6 bg-lime-600 text-white font-semibold sm:text-lg">
          <RxHamburgerMenu className="cursor-pointer" onClick={()=>setisVisible((prev) => !prev)}/>
            <h2 className="pr-1 ">
              All departmant
            </h2>
            <IoIosArrowDown onClick={()=>setisVisible((prev) => !prev)} className="cursor-pointer"/>
            <Link to={'/admin/viewcart'} className='text-lg md:text-2xl ml-auto sm:hidden'> 
            <PiShoppingCartBold />
            </Link>
          </div>
          <div hidden={true} className=" p-4 px-8  flex-col gap-2 sm:gap-3 font-medium text-sm sm:text-lg border " style={{display:`${isvisible? 'flex': 'none'}`, transform:`translateY(${isvisible ? '100':'0'})`, transition: "transform 2s ease"}}>
            <h3 className="cursor-pointer  hover:translate-x-2 hover:transition-all ">
              Vegitables
            </h3>
            <h3 className="cursor-pointer  hover:translate-x-2 hover:transition-all">
              Fruit & Nut Gifts
            </h3>
            <h3 className="cursor-pointer  hover:translate-x-2 hover:transition-all">
              Butter & Eggs
            </h3>
            <h3 className="cursor-pointer  hover:translate-x-2 hover:transition-all">
              Groceries
            </h3>
            <h3 className="cursor-pointer  hover:translate-x-2 hover:transition-all">
              Vegitables
            </h3>
            <h3 className="cursor-pointer  hover:translate-x-2 hover:transition-all">
              Vegitables
            </h3>
          </div>

        </aside>
        <div className="md:h-[50vh] lg:h-[80vh] overflow-hidden w-[100%]">
          <img className="max-h-fit " src='/image/banner.jpg' alt="fresh vegitable in your area" />
        </div>
      </section>
      <section className="p-2  md:pt-8">
        <h3 className="font-semibold text-xl">Shop by categories</h3>
        <AllCategories/>
      </section>
    </main>
  );
}
