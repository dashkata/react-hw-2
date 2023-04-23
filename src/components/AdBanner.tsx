import React from "react";
import { BsCheck } from "react-icons/bs";

const { useState, useEffect } = React;

const placeHolderList = [
  <div className="flex flex-row items-center cursor-pointer hover:underline">
    <BsCheck color="green" size={24} />
    <p className="font-sans text-base font-semibold">Free Delivery</p>
    <p className="font-serif text-base ml-1">On All Orders Over £50</p>
  </div>,
  <div className="flex flex-row items-center cursor-pointer hover:underline">
    <BsCheck color="green" size={24} />
    <p className="font-sans text-base font-semibold">
      Customers Rate Us 4.7 / 5
    </p>
  </div>,
  <div className="flex flex-row items-center cursor-pointer hover:underline">
    <p className="font-sans text-base font-semibold">Free & Easy</p>
    <p className="font-serif text-base ml-1">Returns*</p>
  </div>,
];
const Test = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = () => {
      setIndex((prevIndex) => {
        if (prevIndex === placeHolderList.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };
    setInterval(timer, 5000);
  }, []);

  return placeHolderList[index];
};

function AdBanner() {
  return (
    <div className="flex items-center justify-center bg-slate-50 w-full h-12 ">
      <div className="flex flex-row lg:hidden items-center justify-center">
        <Test />
      </div>
      <ul className="hidden lg:flex flex flex-row justify-around w-full">
        {placeHolderList}
      </ul>
    </div>
  );
}
export default AdBanner;
