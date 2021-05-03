import React from "react";

const CollectionsList = ({ image, name }) => {
  return (
    <>
      <div className="relative overflow-hidden h-80	rounded-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition duration-700 ease-in-out filter unset object-center"
        />
        <div
          className="absolute inset-0	w-full h-full"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
          }}
        >
          <div className="absolute bottom-0 w-full">
            <p className="text-white m-6 text-2xl truncate ">{name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsList;
