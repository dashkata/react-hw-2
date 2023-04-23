import { BsBag, BsHeart, BsPerson } from "react-icons/bs";

const getIconFromName = (icon) => {
  switch (icon) {
    case "person":
      return <BsPerson size={24} />;
    case "heart":
      return <BsHeart size={24} />;
    case "bag":
      return <BsBag size={24} />;
  }
};

function NavBarButton({ iconName, text }) {
  const icon = getIconFromName(iconName);
  return (
    <div className="flex flex-col items-center gap-2 cursor-pointer">
      <button className="lg:inline">{icon}</button>
      <h1 className="hidden lg:flex text-xs font-serif">{text}</h1>
    </div>
  );
}
export default NavBarButton;
