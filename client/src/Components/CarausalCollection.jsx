import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const CarausalCollection = ({ image, name }) => {
  return (
    <>
      <div className="relative overflow-hidden h-40 w-full  md:h-80 rounded-md 	md:rounded-lg">
        <LazyLoadImage 
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-700 ease-in-out filter unset object-center"
          placeholder={
            <div className="animate-pulse w-full h-full bg-gray-200 "></div>
          }
          wrapperClassName="w-full h-full"
        />
        <div
          className="absolute inset-0	w-full h-full"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
          }}
        >
          <div className="absolute bottom-0 w-full">
            <p className="text-white mx-3 my-2 text-lg md:text-2xl truncate">
              {name}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default trackWindowScroll(CarausalCollection);
