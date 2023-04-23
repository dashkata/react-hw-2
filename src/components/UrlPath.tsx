function UrlPath({ path }) {
  const pathList = path.map((pathPart, index, arr) => (
    <li className="flex">
      <p className="underline">{pathPart}</p>
      {arr.length - 1 != index && <p className="text-black mx-2">/</p>}
    </li>
  ));
  return (
    <div className="flex flex-row w-max my-5 px-5 hidden lg:flex cursor-pointer">
      <ul className="text-black text-sm font-serif flex">{pathList}</ul>
    </div>
  );
}

export default UrlPath;
