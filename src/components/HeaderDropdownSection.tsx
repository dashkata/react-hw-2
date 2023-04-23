import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

function HeaderDropdownSection(props) {
  const [show, setShow] = useState(false);
  const listItems = props.section.map((listSection) => {
    return (
      <li>
        {listSection.map((listItem, i) => {
          if (i != 0) {
            return (
              <li className="text-xs my-2 font-serif cursor-pointer">
                {listItem}
              </li>
            );
          } else {
            return <li className="text-lg font-sans">{listItem}</li>;
          }
        })}
      </li>
    );
  });
  return (
    <div
      className="flex items-center"
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => setShow(false)}
    >
      {props.text} <SlArrowDown className="ml-2" />
      {show && (
        <div
          className="bg-white h-fit w-screen absolute left-0 top-[172px] drop-shadow-md cursor-default"
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <ul className="flex flex-row gap-20 mt-4 ml-8 mb-10">{listItems}</ul>
        </div>
      )}
    </div>
  );
}
export default HeaderDropdownSection;
