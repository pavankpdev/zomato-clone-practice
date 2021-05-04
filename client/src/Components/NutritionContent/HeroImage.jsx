import React from "react";

const HeroImage = ({ imageLg, imageSm, name }) => {
  return (
    <>
      <div
        className="relative overflow-hidden h-60 md:h-72 w-full"
        style={{
          borderRadius: "2rem",
        }}
      >
        <img
          src={window.screen.width >= 768 ? imageLg : imageSm}
          alt={name}
          className=" w-full h-full object-contain transition duration-700 ease-in-out filter unset object-center"
          loading="lazy"
        />
      </div>
    </>
  );
};

export default HeroImage;
