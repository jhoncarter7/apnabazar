import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextTruncate from "react-text-truncate";
import PropTypes from "prop-types";

ProductsCard.propTypes = {
  prodId: PropTypes.string,
  title: PropTypes.string,
  oldPrice: PropTypes.string,
  newPrice: PropTypes.string,
  imageUrl: PropTypes.array,
};
export default function ProductsCard({
  prodId,
  title,
  oldPrice,
  newPrice,
  imageUrl,
}) {

const { currentUser } = useSelector((state) => state.user);

  const addcartProd = async (itemId) => {
    try {
      const res = await fetch("/api/cart/addAndUpdateProductToCart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          userId: currentUser._id,
          productId: itemId,
          quantity: 1,
        }),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();

      if (data.status === false) {
        console.log(data.message);
        return;
      }
      toast.success("Item added to Cart", { icon: "👏" });
    } catch (error) {
      toast.error("Item not added to Cart", { icon: "" });
      console.log(error);
    }
    // setItemId(null)
  };

  // console.log(cartprod)
  return (
    <div className="w-[65vw]  md:w-[42vw] lg:w-[18vw] shadow-md p-[2vw] rounded-lg">
      <img className="h-[26vh]" src={imageUrl[0]} alt="image is here" />
      <p className="text-xs text-gray-700">6 mins</p>
      <h3 className="text-sm">
        <TextTruncate lines={1} element="h3" truncateText="…" text={title} />
      </h3>
      <p className="text-gray-600 font-light">500g</p>
      <div className="flex justify-between">
        <div>
          <p className="text-xs">{newPrice}</p>
          <p className="text-xs text-gray-600 line-through items-center">
            {oldPrice}
          </p>
        </div>
        <button
          className="border-2 px-8 border-green-500 rounded-md bg-green-100 text-green-500 font-semibold cursor-pointer"
          onClick={() => addcartProd(prodId)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
