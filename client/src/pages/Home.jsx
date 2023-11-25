import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";




export default function Home() {
  const [isvisible, setisVisible] = useState(true)
  return (
    <main className="p-5">
      <section className="md:flex gap-4 ">
        <aside className="">
          <div className="flex items-center gap-4  p-4 px-6 bg-lime-600 text-white font-semibold sm:text-lg">
          <RxHamburgerMenu/>
            <h2 className="pr-5 ">
              All departmant
            </h2>
            <IoIosArrowDown onClick={()=>setisVisible((prev) => !prev)} className="cursor-pointer"/>
          </div>
          <div hidden={true} className=" p-4 px-8 flex flex-col gap-2 sm:gap-3 font-medium text-sm sm:text-lg border " style={{visibility:`${isvisible? 'visible': 'hidden'}`, transform:`translateY(${isvisible ? '100':'0'})`, transition: "transform 2s ease"}}>
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
        <div>
          <h1> </h1>
          <button> </button>
        </div>
      </section>
    </main>
  );
}
