import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

const HeroImage = ({ imageLg, imageSm, name }) => {
  return (
    <>
      <div
        className="relative overflow-hidden h-60 md:h-72 w-full"
        style={{
          borderRadius: "2rem",
        }}
      >
        <LazyLoadImage
          src={window.screen.width >= 768 ? imageLg : imageSm}
          alt={name}
          className=" w-full h-full object-contain transition duration-700 ease-in-out filter unset object-center"
          placeholder={
            <div className="animate-pulse w-full h-full bg-gray-200 "></div>
          }
          wrapperClassName="w-full h-full"
        />
      </div>
    </>
  );
};

export default trackWindowScroll(HeroImage);
