import { Rating, Typography } from "@mui/material";
import { AiOutlinePlusCircle } from "react-icons/ai";

function WallpaperCard(props) {
  return (
    <article className="p-4 flex flex-col justify-center ">
      <img src={props.url} alt={props.title} className="cursor-pointer" />
      <ul className="py-6"></ul>
      <p className="cursor-pointer hover:underline text-lg font-serif mb-2">
        {props.title}
      </p>
      <p className="flex text-sm items-center">
        <Rating
          name="read-only"
          precision={0.5}
          value={props.rating}
          readOnly
        />{" "}
        {props.rating}
      </p>

      <div className="w-full flex justify-between items-center">
        <p className="text-base font-serif font-medium">£{props.price}</p>
        <button className="hidden lg:inline underline cursor-pointer text-base bg-transparent border-none font-serif">
          Order sample
        </button>
        <button className="lg:hidden rounded-full border-black border-solid">
          <AiOutlinePlusCircle size={35} />
        </button>
      </div>
      <p className="text-sm uppercase font-serif">Per roll</p>
    </article>
  );
}

export default WallpaperCard;
