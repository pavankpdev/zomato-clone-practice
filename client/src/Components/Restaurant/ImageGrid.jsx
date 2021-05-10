import React from "react";
import { Link } from "react-router-dom";

const ImageGrid = ({ images }) => {
  return (
    <>
      <div className="h-64 w-full my-2 relative md:hidden">
        <img
          src={images[0].location}
          alt={images[0].name}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute bottom-2 right-2 bg-black px-3 py-2 text-white rounded-lg bg-opacity-60">
          <Link to="/restaurant/dada/photos">
            <i className="fas fa-camera text-white mr-2" /> View Gallery
          </Link>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1 my-2 md:h-80 lg:h-96">
        <div className="h-full w-3/5">
          <img
            src={images[0].location}
            alt={images[0].name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="h-full w-2/5 flex items-center gap-1">
          <div className="h-full w-full flex flex-col items-center gap-1">
            <img
              src={images[1].location}
              alt={images[1].name}
              className="w-full h-1/2"
            />
            <img
              src={images[2].location}
              alt={images[2].name}
              className="w-full h-1/2"
            />
          </div>
          <div className="h-full w-full flex flex-col items-center gap-1">
            <div className="w-full h-1/2 relative">
              <img
                src={images[3].location}
                alt={images[3].name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-opacity-40 bg-black w-full h-full"></div>
              <h3 className="z-50 absolute inset-y-2/4 w-full h-full text-center text-white font-semibold">
                View Gallery
              </h3>
            </div>
            <div className="w-full h-1/2 relative">
              <img
                src={images[4].location}
                alt={images[4].name}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-opacity-60 bg-white w-full h-full"></div>
              <div className="z-50 absolute inset-y-1/4 w-full h-full text-center text-black font-semibold flex flex-col items-center">
                <div className="bg-black py-2 px-3 rounded-full bg-opacity-50">
                  <i className="fas fa-camera text-white" />
                </div>
                View Gallery
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
