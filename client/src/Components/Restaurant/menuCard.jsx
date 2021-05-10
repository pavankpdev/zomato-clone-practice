import React from "react";

const MenuCard = ({ images, category }) => {
  return (
    <>
      <div className="w-5/12 md:w-56">
        <div className="w-full h-36 md:h-56">
          <img
            src={images[0]}
            alt={`${category} Menu`}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="font-semibold md:text-xl">{category} Menu</h3>
        <small>{images.length} Pages</small>
      </div>
    </>
  );
};

export default MenuCard;
