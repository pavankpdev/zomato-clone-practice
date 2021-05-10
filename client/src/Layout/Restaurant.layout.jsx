import React from "react";
import { useLocation } from "react-router-dom";

import RestaurantNavBar from "../Components/Navbar/RestaurantNavbar";
import Rating from "../Components/Ratings";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import RestaurantTabs from "../Components/Restaurant/Tabs";

const Restaurant = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const images = [
    {
      location:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "salad",
    },
    {
      location:
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
      name: "waffel",
    },
    {
      location:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "some food",
    },
    {
      location:
        "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "res",
    },
    {
      location:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "chef",
    },
  ];

  const tabs = [
    {
      name: "Overview",
      route: "overview",
      isActive: currentPath.includes("overview"),
    },
    {
      name: "Order Online",
      route: "order-online",
      isActive: currentPath.includes("order-online"),
    },
    {
      name: "Reviews",
      route: "reviews",
      isActive: currentPath.includes("reviews"),
    },
    {
      name: "Menu",
      route: "menu",
      isActive: currentPath.includes("menu"),
    },
    {
      name: "Photos",
      route: "photos",
      isActive: currentPath.includes("photos"),
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <RestaurantNavBar />
        <ImageGrid images={images} />
        <div className="flex flex-col mt-6 md:flex-row-reverse md:justify-between md:mt-0">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Rating value={4} bg="bg-black" />
              </div>
              <h5 className="text-black font-light">613 Dining Reviews</h5>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <Rating value={4} />
              </div>
              <h5 className="text-black font-light">613 Dining Reviews</h5>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <h1 className="text-2xl font-semibold lg:text-4xl">
              Some Restaurent
            </h1>
            <p className="text-sm text-gray-500 lg:text-xl">
              Quick Bites - Kerala, South Indian, Chinese
            </p>
            <h6 className="text-lg text-gray-500 font-semibold">Magadi road</h6>
          </div>
        </div>
        <div className="flex flex-col mt-4 md:mt-8">
          <div className="flex items-center flex-wrap gap-2">
            <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
              <i className="far fa-star mr-2 text-brand " />
              <span>Add Reviews</span>
            </button>
            <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
              <i className="fas fa-directions mr-2 text-brand " />
              <span>Direction</span>
            </button>
            <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
              <i className="far fa-bookmark mr-2 text-brand " />
              <span>Bookmark</span>
            </button>
            <button className="bg-white border border-gray-600 text-gray-800 font-normal py-2 px-4 rounded inline-flex items-center">
              <i className="far fa-share-square mr-2 text-brand " />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="flex items-center overflow-scroll md:overflow-hidden mt-5 gap-4">
          {tabs.map((data) => (
            <RestaurantTabs {...data} key={`${Date.now()}`} />
          ))}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
};

export default Restaurant;
