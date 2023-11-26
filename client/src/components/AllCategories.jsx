import { Link} from 'react-router-dom'

export default function AllCategories() {

  return (
    <div className="flex flex-wrap gap-4">   
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer"  to={'/vegetable-fruits'}> 
    <img className="w-[10vw]" src="/image/fruits&veg.png" alt="Vegetables & Fruits" />   
    <p>Vegetables & Fruits</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/dary-Breakfast"} > 
    <img className="w-[10vw]"  src="/image/dairy.avif" alt="Dairy & Breakfast" />   
    <p>Dairy & Breakfast</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/munchies"} > 
    <img className="w-[10vw]" src="/image/munchies.avif" alt="Munchies" />   
    <p>Munchies</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/cold-Drink"} > 
    <img className="w-[10vw]" src="/image/coldring.avif" alt="Cold Drinks & Juices" />   
    <p>Cold Drinks & Juices</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/instant-frozen"} > 
    <img className="w-[10vw]" src="/image/instant.avif" alt="Instant & Frozen Food" />   
    <p>Instant & Frozen Food</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/tea-coffe"} > 
    <img className="w-[10vw]" src="/image/tea.avif" alt="Tea, coffee & Health Drinks" />   
    <p>Tea, coffee & Health Drinks</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/bakery"} > 
    <img className="w-[10vw]" src="/image/bakery.avif" alt="Bakery & Biscuits" />   
    <p>Bakery & Biscuits</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/sweet-tooth"} > 
    <img className="w-[10vw]" src="/image/sweetTooth.avif" alt="" />   
    <p>Sweet Tooth</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/atta-Rice"}> 
    <img className="w-[10vw]" src="/image/atta.avif" alt="" />   
    <p>Atta, Rice & Dal</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/dry-Fruits"} > 
    <img className="w-[10vw]" src="/image/mashala.avif" alt="" />   
    <p>Dry Fruits, Masala & oil</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/sauces-spreads"} > 
    <img className="w-[10vw]" src="/image/sauces.avif" alt="" />   
    <p>Sauces & Spreads</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/baby-Care"} > 
    <img className="w-[10vw]" src="/image/baby.avif" alt="" />   
    <p>Baby Care</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/cleaning"} > 
    <img className="w-[10vw]" src="/image/cleaning.avif" alt="" />   
    <p>Cleaning Essentials</p>
    </Link>
    <Link className="w-[12vw] h-45 min-w-[6rem] cursor-pointer" to={"/personal-care"} > 
    <img className="w-[10vw]" src="/image/personalcare.avif" alt="" />   
    <p>Personal Care</p>
    </Link>
    
    </div>
  )
}
