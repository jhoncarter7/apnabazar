import { useCallback, useEffect, useState } from "react";
import Dashboard from "../../components/Dashboard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";



export default function ProductList() {
  const { currentUser } = useSelector((state) => state.user);
  const [productLists, setproductLists] = useState();
  // const [deleteProductId, setDeleteProductId] = useState(null);

  const listOfProduct = useCallback(async () => {
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
  }, [currentUser._id]); // Add an empty array as the second argument to useCallback

  useEffect(() => {
    listOfProduct();
  }, [currentUser._id, listOfProduct]);

  const deleteProductHandler = async (productId) => {
    try {
      const res = await fetch(`/api/deleteSellerProduct/${productId}`);
      if (!res) {
        console.log("Product not found");
      }
      const data = await res.json();
      if (data.message !== "success") {
        console.log(data.message);
        return;
      }
      console.log("Product deleted successfully");
      setproductLists(
        productLists.filter((product) => product._id !== productId)
      );
     console.log( "productLists", productLists)
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <main className="flex justify-between gap-3 md:gap-8">
      <Dashboard className="self-start" />
      <div className="flex flex-wrap gap-y-4 gap-x-5">
        {productLists ? (
          productLists?.map((product) => (
            <div
              className="min-w-[11rem] w-[35vw]  md:w-[25vw] lg:w-[18vw] shadow-md p-[1vw] rounded-md  dark:bg-white "
              key={product._id}
            >
              <img className="h-[20vh] w-[35] lg:w-[18vw] md:h-[26vh] mb-4" src={product.imageUrl[0]} alt="" />
              <p className="text-xs text-gray-700">6 mins</p>

              <h3 className="text-sm h-6">
                <TextTruncate
                  line={1}
                  element="div"
                  truncateText="…"
                  text={product.title}
                />
              </h3>

              <p className="text-gray-600 font-light">500g</p>
              <div className="flex justify-between">
                <div>
                  <p className="text-xs">{product.newPrice}</p>
                  <p className="text-xs text-gray-600 line-through items-center">
                    {product.oldPrice}
                  </p>
                </div>
                <div className="w-min pt-2 gap-2 flex flex-col">
                  <Link to={`/admin/editProduct/${product._id}`}>
                    <button className="border-2 px-8 border-green-500 rounded-md bg-green-100 text-green-500 font-semibold cursor-pointer">
                      EDIT
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteProductHandler(product._id)}
                    className="border-2 px-7 border-red-500 rounded-md bg-red-100 text-red-500 font-semibold cursor-pointer"
                  >
                    delete
                  </button>
                </div>
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
