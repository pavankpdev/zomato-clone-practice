import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

import Rating from "./Ratings";

const RestaurantCard = ({
  image,
  title,
  cuisine,
  averageCost,
  quantity,
  rating,
}) => {
  return (
    <>
      <div className="w-full md:w-1/3 md:px-2 mb-10">
        <div className="w-full rounded-lg  h-64	overflow-hidden">
          <LazyLoadImage
            effect="blur"
            src={image}
            alt={title}
            className="rounded-lg w-full h-full object-cover transform transition duration-500  hover:scale-110"
            placeholder={
              <div className="animate-pulse w-full h-full bg-gray-200 "></div>
            }
            wrapperClassName="w-full h-full"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
          <span>
            {rating ? (
              <>
                <Rating value={rating} />
                <span className="font-bold text-gray-700">4.1</span>
                <span className="text-gray-500">(47.6K Delivery Reviews)</span>
              </>
            ) : (
              <>
                {" "}
                <span className="text-gray-500">No ratings available</span>
              </>
            )}
          </span>
          <p className="text-gray-600 text-lg mb-2 truncate ">{cuisine}</p>
          <h5 className="text-gray-600 text-lg">
            ₹{averageCost} {quantity || "for one"}
          </h5>
        </div>
      </div>
    </>
  );
};

export default trackWindowScroll(RestaurantCard);
