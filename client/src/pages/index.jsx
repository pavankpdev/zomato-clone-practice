import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.screen.width >= 768) history.push("/delivery");
  }, []);

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
                <div className="rounded-full py-2 px-3 bg-white">
                  <i className="fas fa-user text-brand"></i>
                </div>
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
                  <div className="my-2 flex items-center gap-3 bg-white rounded-lg py-2 px-3">
                    <i className="fas fa-map-marker-alt text-brand mx-2" />
                    <p className="w-full truncate">
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
      </div>
    </>
  );
};

export default HomePage;
