import React from "react";

const RestaurantCard = ({ image, title, cuisine, averageCost }) => {
  return (
    <>
      <div className="w-full md:w-1/3 md:px-2 mb-10">
        <div className="w-full h-64	">
          <img
            src={image}
            alt={title}
            className="rounded-lg object-cover w-full h-full"
            loading="lazy"
          />
        </div>
        <div className="mt-2">
          <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
          <span>
            <i className="fas fa-star fa-xs bg-brand text-white p-1 rounded mr-1"></i>
            <i className="fas fa-star fa-xs bg-brand text-white p-1 rounded mr-1"></i>
            <i className="fas fa-star fa-xs bg-brand text-white p-1 rounded mr-1"></i>
            <i className="fas fa-star fa-xs bg-brand text-white p-1 rounded mr-1"></i>
            <i className="fas fa-star fa-xs bg-brand text-white p-1 rounded mr-1"></i>
            <span className="font-bold text-gray-700">4.1</span>
            <span className="text-gray-500">(47.6K Delivery Reviews)</span>
          </span>
          <p className="text-gray-600 text-lg mb-2 truncate ">{cuisine}</p>
          <h5 className="text-gray-600 text-lg">{averageCost} for one</h5>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
