import { useState } from "react";
import { BsX } from "react-icons/bs";

function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    showBanner && (
      <div className="flex flex-row bg-[#6eceb2] justify-center">
        <p className="text-center text-base text-black grow place-self-center font-serif ">
          Easter Sale! Save 20% On Wallpaper*!
        </p>
        <button
          className="bg-transparent border-transparent border-0 place-self-start"
          onClick={() => {
            setShowBanner(false);
          }}
        >
          <BsX />
        </button>
      </div>
    )
  );
}
export default Banner;
