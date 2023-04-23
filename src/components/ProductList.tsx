import { useEffect, useState } from "react";
import { RiShoppingBasketFill } from "react-icons/ri";
import { BsSquare, BsBorderAll } from "react-icons/bs";
import FilterButton from "./FilterButton";
import WallpaperCard from "./WallpaperCard";

function ProductList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://dummyjson.com/products");
      if (!result.ok) return;

      const data = await result.json();
      setProductList(data.products);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-row justify-center lg:justify-between mx-4 py-2 lg:border-b-2 lg:border-[#6eceb2] items-center">
        <div className="flex flex-row items-center">
          <p className="text-lg text-center font-semibold font-serif">Found:</p>
          <p className="text-lg text-center font-serif">
            {productList.length} results
          </p>
        </div>
        <div className="flex flex-row items-center hidden lg:flex ">
          <FilterButton text={"Colour"} />
          <FilterButton text={"Brand"} />
          <FilterButton text={"Design Style"} />
          <select
            className="w-fit rounded-full text-lg py-1 px-3 cursor-pointer"
            onChange={(elem) => {
              switch (elem.target.value) {
                case "1":
                  setProductList(
                    [...productList].sort((a, b) => b.price - a.price)
                  );
                  break;
                case "2":
                  setProductList(
                    [...productList].sort((a, b) => a.price - b.price)
                  );
                  break;
              }
            }}
          >
            <option value="sort">Sort</option>
            <option value="1">Price: High - Low</option>
            <option value="2">Price: Low - High</option>
          </select>
        </div>
      </div>

      <div className="flex flex-row px-4 lg:hidden justify-between">
        <button className="text-xs bg-[#ebe3e9] rounded-full px-12 py-2 font-serif">
          FILTER & SORT
        </button>
        <div className="flex">
          <button className="py-2 pr-2 font-serif">
            <BsSquare />
          </button>
          <button className="py-2 font-serif">
            <BsBorderAll />
          </button>
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        {productList.map((product) => (
          <WallpaperCard
            key={product.id}
            title={product.title}
            url={product.images[0]}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </>
  );
}
export default ProductList;
