import { RiArrowDownSLine } from "react-icons/ri";

function FilterButton({ text }) {
  return (
    <button className="flex px-7 text-base font-serif items-center">
      {text} <RiArrowDownSLine size={20} />
    </button>
  );
}
export default FilterButton;
