import { BsBag, BsHeart, BsList, BsPerson, BsSearch } from "react-icons/bs";
import HeaderDropdown from "./HeaderDropdown";
import NavBarButton from "./NavBarButton";

function NavBar() {
  return (
    <div className="border-b-4 border-[#6eceb2]">
      <div className="flex flex-row py-4 lg:px-4 lg:py-8 justify-between ">
        <div className="lg:hidden">
          <button className="p-3">
            <BsList size={24} />
          </button>
          <button className="p-3">
            <BsSearch size={24} />
          </button>
        </div>
        <img
          src="public/wallpaperit-Logo.png"
          alt=""
          className="w-36 lg:w-64 h-14 cursor-pointer"
        />
        <input
          type="text"
          placeholder="Search for products..."
          className="border-solid border-[#6eceb2] border-2 rounded-full text-sm hidden  basis-1/3 shrink lg:inline h-11 pl-3 font-serif text-sm tracking-wide"
        />
        <div className="flex items-center gap-6 lg:gap-12 mr-2 cursor-pointer">
          <div className="flex flex-col items-center gap-2">
            <button className="${ hidden } lg:inline">
              <BsPerson size={24} />
            </button>
            <h1 className="hidden lg:flex text-xs font-serif">Sign In</h1>
          </div>

          <NavBarButton iconName={"heart"} text={"Wishlist"} />
          <NavBarButton iconName={"bag"} text={"Bag"} />
        </div>
      </div>
      <HeaderDropdown />
    </div>
  );
}
export default NavBar;
