import { useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductList() {
  const { currentUser } = useSelector((state) => state.user);
  const [productLists, setproductLists] = useState();
  

  useEffect(() => {
    const listOfProduct = async () => {
      try {
        const res = await fetch(`/api/getSellerProduct/${currentUser._id}`);
        const data = await res.json();
        if (data.status === false) {
          console.log(data.status);
          return;
        }
        setproductLists(data);
      } catch (error) {
        console.log(error);
      }
    };
    listOfProduct();
  }, [currentUser._id]);

 
  return (
    <main className="flex justify-between gap-3 md:gap-8">
      <Dashboard className="self-start" />
      <div className="w-full grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden gap-y-4">
        {productLists ? (
          productLists?.map((product) => (
            <div
              className="w-[65vw]  md:w-[42vw] lg:w-[18vw] shadow-md p-[2vw] rounded-md"
              key={product._id}
            >
              <img className="h-[26vh]" src={product.imageUrl[0]} alt="" />
              <p className="text-xs text-gray-700">6 mins</p>
              <h3 className="text-sm">{product.title} </h3>
              <p className="text-gray-600 font-light">500g</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs">{product.newPrice}</p>
                  <p className="text-xs text-gray-600 line-through items-center">
                    {product.oldPrice}
                  </p>
                </div>
                <Link to={`/admin/editProduct/${product._id}`}>
                  <button className="border-2 px-8 border-green-500 rounded-md bg-green-100 text-green-500 font-semibold cursor-pointer">
                    EDIT
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h4>No Product Listed!</h4>
        )}
      </div>
    </main>
  );
}
