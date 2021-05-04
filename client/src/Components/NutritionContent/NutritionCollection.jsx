import React from "react";

const NutritionCollection = ({ image, name }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-white shadow-lg">
        <img src={image} alt={name} />
        <p className="mt-4 text-2xl truncate">{name}</p>
      </div>
    </>
  );
};

export default NutritionCollection;
