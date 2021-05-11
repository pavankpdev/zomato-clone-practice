import React from "react";

const GalleryImage = ({ image, name }) => {
  return (
    <>
      <div className="w-32 h-32 md:w-40 md:h-48 lg:w-1/6 lg:h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg  transform transition duration-500 hover:scale-110"
        />
      </div>
    </>
  );
};

export default GalleryImage;
