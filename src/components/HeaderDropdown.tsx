import { SlArrowDown } from "react-icons/sl";
import HeaderDropdownSection from "./HeaderDropdownSection";

function HeaderDropdown() {
  return (
    <div className="flex flex-row justify-around text-lg hidden lg:flex font-serif tracking-wider cursor-pointer">
      <HeaderDropdownSection
        text={"WALLPAPER"}
        section={[
          ["Shop By Design", "Animal", "Bird", "Brick", "Damask", "Floral"],
          ["Shop By Color", "Black", "Blue", "Brown", "Cream", "Glitter"],
          [
            "Shop By Room",
            "Bathroom",
            "Bedroom",
            "Dining room",
            "Hall",
            "Kids",
          ],
          [
            "Shop By Brand",
            "Joules",
            "Joules Kids",
            "Laura Ashley",
            "Next",
            "Superfresco Easy",
          ],
        ]}
      />
      <HeaderDropdownSection
        text={"PAINT"}
        section={[
          ["Paint By Color", "Black", "Blue", "Brown", "Cream", "Glitter"],
          ["Paint By Style", "Animal", "Bird", "Brick", "Damask", "Floral"],
          [
            "Shop By Brand",
            "Joules",
            "Laura Ashley",
            "Next",
            "Superfresco Easy",
          ],
        ]}
      />
      <HeaderDropdownSection
        text={"BRANDS"}
        section={[
          [
            "Shop By Brand",
            "Joules",
            "Laura Ashley",
            "Next",
            "Superfresco Easy",
          ],
        ]}
      />
      <div>WALL MURALS</div>
      <HeaderDropdownSection
        text={"WALL ART"}
        section={[
          ["Shop By Type", "Canvas Wall Art", "Framed Wall Art", "Clocks"],
          ["Shop By Color", "Black", "Blue", "Brown", "Cream", "Glitter"],
        ]}
      />
      <div>SALE</div>
    </div>
  );
}
export default HeaderDropdown;
