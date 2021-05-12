import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const NutritionCollection = ({ image, name }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-white shadow-lg">
        <LazyLoadImage
          src={image}
          alt={name}
          placeholder={
            <div className="animate-pulse w-full h-full bg-gray-200 "></div>
          }
          wrapperClassName="w-full h-full"
        />
        <p className="mt-4 text-2xl truncate">{name}</p>
      </div>
    </>
  );
};

export default trackWindowScroll(NutritionCollection);
