export default function ProductsCard({title, oldPrice, newPrice, imageUrl}) {
  return (
    <div className="w-[42vw] lg:w-[18vw] shadow-md p-[2vw] rounded-lg">
      <img className="h-[26vh]" src={imageUrl[0]} alt="" />
      <p className="text-xs text-gray-700">6 mins</p>
      <h3 className="text-sm">{title} </h3>
      <p className="text-gray-600 font-light">500g</p>
      <div className="flex justify-between">
        <div>
          <p className="text-xs">{newPrice}</p>
          <p className="text-xs text-gray-600 line-through items-center">{oldPrice}</p>
        </div>
        <button className="border-2 px-8 border-green-500 rounded-md bg-green-100 text-green-500 font-semibold cursor-pointer">ADD</button>
      </div>
    </div>
  );
}
