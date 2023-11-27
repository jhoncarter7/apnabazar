import ProductsCard from "../../components/ProductsCard";

export default function AttaRice() {
  return (
    <div className="p-6 ">
      <h2 className="text-xl text-gray-600">Buy Atta & Rice Online</h2>
      <div className="grid  grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 overflow-hidden gap-y-4 ">
      <ProductsCard/>
      </div>
    </div>
  )
}
