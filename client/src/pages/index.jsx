import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

// Components
import TabsMobile from "../Components/TabsMobile";
import CarausalCollection from "../Components/CarausalCollection";

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.screen.width >= 768) history.push("/delivery");
  }, []);
  const fakeCollections = [
    {
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Pizza",
    },
    {
      image:
        "https://images.unsplash.com/photo-1572448862527-d3c904757de6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Burger",
    },
    {
      image:
        "https://images.unsplash.com/photo-1593829111182-8a237d2bb024?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      name: "Coffee",
    },
    {
      image:
        "https://images.unsplash.com/photo-1543826173-70651703c5a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80",
      name: "Chicken",
    },
    {
      image:
        "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=331&q=80",
      name: "Paneer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1499889808931-317a0255c0e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      name: "Muffins",
    },
  ];
  return (
    <>
      <div className="md:hidden">
        <div className="relative h-96 w-full">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
            alt="Food bg"
            className="h-full w-full"
          />
          <div className="absolute h-96 w-full bg-black inset-0 opacity-50"></div>
          <div className="absolute inset-0 z-50 h-96 w-full">
            <div className="relative h-full w-full p-3">
              <div className="flex justify-end">
                <Link to="/login">
                  <div className="rounded-full py-2 px-3 bg-white">
                    <i className="fas fa-user text-brand"></i>
                  </div>
                </Link>
              </div>
              <div className="absolute inset-x-0 bottom-0 w-full flex flex-col justify-end items-center p-3 pb-8 gap-4">
                <img
                  src="https://i.ibb.co/YWPQbXR/16204513250785204314801633812938-removebg-preview.png"
                  alt="zomato logo"
                  className="w-2/5	"
                />
                <p className="text-lg text-indigo-100 text-center font-medium">
                  Discover the best food & drinks in your city
                </p>
                <div className="w-full">
                  <div className="my-2 flex items-center gap-3 bg-white rounded-lg p-3">
                    <i className="fas fa-map-marker-alt text-brand mx-2" />
                    <p className="w-full truncate text-sm font-semibold">
                      BengaluurBengaluurBengaluurBengaluurBengaluurBengaluurBengaluurBengaluurBengaluur
                    </p>
                    <i className="fas fa-caret-down text-gray-700" />
                  </div>
                  <div className="rounded-lg bg-white flex items-center gap-3 text-gray-600 w-full border border-gray-200 shadow-md px-2">
                    <i className="fal fa-search mx-2"></i>
                    <input
                      type="search"
                      name="serch"
                      placeholder="Search for restaurant"
                      className="bg-white h-10  rounded-full text-sm focus:outline-none w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <TabsMobile />

          <div className="mb-4">
            <h1 className="text-xl font-semibold text-gray-700">Collections</h1>{" "}
            <p className="text-sm text-gray-500">
              Explore curated lists of top restaurants, cafes, pubs, and bars in
              Bengaluru, based on trends
            </p>
            <div className="mt-4 w-full flex gap-2 flex-wrap justify-between">
              {fakeCollections.map((data) => (
                <div style={{ width: "48%" }}>
                  <CarausalCollection {...data} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
