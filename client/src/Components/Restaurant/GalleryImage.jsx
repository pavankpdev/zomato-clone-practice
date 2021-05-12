import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const GalleryImage = ({ image, name }) => {
  return (
    <>
      <div className="w-32 h-32 md:w-40 md:h-48 lg:w-1/6 lg:h-52 overflow-hidden">
        <LazyLoadImage
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg  transform transition duration-500 hover:scale-110"
          placeholder={
            <div className="animate-pulse w-full h-full bg-gray-200 "></div>
          }
          wrapperClassName="w-full h-full"
        />
      </div>
    </>
  );
};

export default trackWindowScroll(GalleryImage);
