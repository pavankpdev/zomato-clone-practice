import React from "react";
import GalleryImage from "../../Components/Restaurant/GalleryImage";

const PhotosRestaurant = () => {
  const images = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/18683377/70b5f1d84be4537ec313ed4e8589646c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      name: "dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/18683377/70b5f1d84be4537ec313ed4e8589646c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      name: "dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/18683377/70b5f1d84be4537ec313ed4e8589646c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      name: "dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/18683377/70b5f1d84be4537ec313ed4e8589646c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      name: "dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/18683377/70b5f1d84be4537ec313ed4e8589646c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      name: "dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/7/18683377/70b5f1d84be4537ec313ed4e8589646c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      name: "dosa",
    },
  ];
  return (
    <>
      {" "}
      <h1 className="text-2xl font-semibold my-6">Overview</h1>
      <div className="w-full flex flex-wrap items-center gap-2 ">
        {images.map((image) => (
          <GalleryImage {...image} />
        ))}
      </div>
    </>
  );
};

export default PhotosRestaurant;
