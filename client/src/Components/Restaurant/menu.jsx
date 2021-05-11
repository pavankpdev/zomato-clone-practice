import React from "react";
import classnames from "classnames";

const Menu = ({ name, id, activeMenu, setActiveMenu }) => {
  return (
    <>
      <a
        href={`#${id}`}
        className={classnames("z-30 block px-4 py-2 text-lg font-semibold", {
          "border-r-4 border-brand text-brand bg-red-100": activeMenu === id,
        })}
        onClick={() => setActiveMenu(id)}
      >
        {name}
      </a>
    </>
  );
};

export default Menu;
