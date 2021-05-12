import React from "react";
import classnames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Rating = ({ value }) => {
  return [1, 2, 3, 4, 5].map((ratingValue) => (
    <i
      className={classnames("fas fa-star fa-xs mr-1", {
        "text-yellow-400": ratingValue <= value,
        "text-gray-300": ratingValue > value,
      })}
      key={ratingValue}
    ></i>
  ));
};

export default Rating;

export const FoodList = ({ name, id, children }) => {
  return (
    <>
      <div
        className="text-xl font-semibold my-6 z-50 md:sticky md:top-0 md:bg-white md:py-2  lg:text-3xl"
        id={id}
      >
        {name}
      </div>
      <div className="flex flex-col gap-3 items-center">{children}</div>
    </>
  );
};

export const FoodItem = ({
  name,
  description,
  isVeg,
  price,
  isMustTry,
  isBestSeller,
  rating,
  totalVotes,
  image,
  ...props
}) => {
  return (
    <>
      <div className="w-full h-20 md:h-40 flex items-start gap-2 md:gap-4">
        <div className="w-1/4 lg:w-1/5 h-full relative ">
          <LazyLoadImage
            src={image}
            alt="Check pepperoni"
            className="h-full w-full rounded lg:rounded-lg"
            placeholder={
              <div className="animate-pulse w-full h-full bg-gray-200 "></div>
            }
            wrapperClassName="w-full h-full"
          />
          {isVeg ? (
            <img
              src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
              alt="veg"
              className="absolute top-2 right-2 h-4 w-4"
            />
          ) : (
            <img
              src="https://www.pngkey.com/png/detail/245-2459071_non-veg-icon-non-veg-symbol-png.png"
              alt="veg"
              className="absolute top-2 right-2 h-4 w-4"
            />
          )}
        </div>
        <div className="w-3/4 h-full lg:w-4/5 px-2">
          <div className="w-full overflow-hidden flex items-start justify-between">
            <h4 className="font-semibold lg:text-xl">{name}</h4>
            <button className="bg-white border border-gray-600 text-gray-800 font-normal py-1 px-2 rounded inline-flex items-center">
              <i className="text-sm fas fa-plus mr-2 text-brand " />
              <span className="text-sm ">Add</span>
            </button>
          </div>
          {isMustTry && (
            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-none text-blue-100 bg-blue-600 rounded-full">
              Must try
            </span>
          )}
          {isBestSeller && (
            <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-medium leading-none text-red-100 bg-red-600 rounded-full">
              BestSeller
            </span>
          )}
          <div>
            <Rating value={rating} />
            <small className="ml-2 text-xs text-gray-500">
              {totalVotes} votes
            </small>
          </div>
          <h6 className="font-semibold text-gray-700 lg:text-lg">₹ {price}</h6>
          <p className="text-xs lg:text-base overflow-ellipsis overflow-hidden text-gray-700">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};
