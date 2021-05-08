import React from "react";
import { Link } from "react-router-dom";

const TabsMobile = () => {
  const List = [
    {
      id: 1,
      name: "Order Food Onine",
      image:
        "https://images.unsplash.com/photo-1509482560494-4126f8225994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      route: "delivery",
    },
    {
      id: 2,
      name: "Go our for a meal",
      route: "dine-out",

      image:
        "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=527&q=80",
    },
    {
      id: 3,
      name: "Nightlife & clubs",
      route: "night-life",

      image:
        "https://images.unsplash.com/photo-1604003729364-68d6cc81b0fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Nutrition",
      route: "nutrition",

      image:
        "https://images.unsplash.com/photo-1542444459-db37a5da9d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="my-8 w-full flex gap-2 flex-wrap justify-between">
      {List.map(({ id, name, image, route }) => (
        <div
          className="h-40 relative rounded-lg shadow-md"
          style={{ width: "48%" }}
          key={id}
        >
          {" "}
          <Link to={route}>
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover rounded-lg"
            />{" "}
          </Link>
          <div className="absolute inset-x-0 bottom-0 bg-white p-3 w-full">
            <h6 className="font-medium text-sm text-center">{name}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabsMobile;
