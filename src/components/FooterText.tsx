import { SlArrowDown } from "react-icons/sl";

function FooterText({ text, textList }) {
  const list = textList.map((paragraph) => (
    <li className="pb-5 cursor-pointer hover:underline">{paragraph}</li>
  ));
  return (
    <div>
      <div className="text-white my-2 p-2 text-lg font-sans font-medium flex justify-between items-center">
        {text}
        <SlArrowDown className="flex lg:hidden" />
      </div>
      <ul className="text-white text-base p-2 font-serif hidden lg:block">
        {list}
      </ul>
      <hr className="solid lg:hidden" />
    </div>
  );
}
export default FooterText;
