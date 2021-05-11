import React from "react";
import MenuCard from "../../Components/Restaurant/menuCard";

const MenuRestaurant = () => {
  const menuCard = [
    {
      images: [
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      ],
      category: "Food",
    },
    {
      images: [
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
        "https://b.zmtcdn.com/data/menus/239/51239/dc68198eb625278a15e9bd403b091248.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
      ],
      category: "Bar",
    },
  ];
  return (
    <>
      {" "}
      <h1 className="text-2xl font-semibold my-6">Overview</h1>
      <div className="flex flex-wrap items-center gap-2">
        {menuCard.map((menu) => (
          <MenuCard {...menu} />
        ))}
      </div>
    </>
  );
};

export default MenuRestaurant;
