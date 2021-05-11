import React, { useState } from "react";
import { Switch } from "@headlessui/react";

const OrderOnlineRestaurant = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <h1 className="text-2xl font-semibold my-6">Order Online</h1>
      <span className="border-r border-gray-600 pr-3">
        <i className="fas fa-street-view mr-2 text-gray-600 " />
        Live tracking not available
      </span>
      <span className="ml-2 text-gray-600 ">
        <i className="far fa-clock mr-2" />
        Clock
      </span>

      <div className="my-6">
        <Switch.Group>
          <div className="flex items-center gap-2">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className={`${
                enabled ? "bg-green-600" : "bg-gray-400"
              } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
            <Switch.Label className="mr-4">Veg Only</Switch.Label>
          </div>
        </Switch.Group>
      </div>

      <div className="">
        <h1 className="text-xl font-semibold my-6" id="recommended">
          Recommended
        </h1>
        <div className="">
          <div className="h-20 flex items-start">
            <div className="w-1/4 h-full relative">
              <img
                src="https://b.zmtcdn.com/data/dish_photos/374/239089cbab2704d08c570a0d6854e374.png?output-format=webp&fit=around|85:85&crop=85:85;*,*"
                alt="Check pepperoni"
                className="h-full w-full rounded"
              />
              <img
                src="https://www.pngkey.com/png/detail/245-2459071_non-veg-icon-non-veg-symbol-png.png"
                alt="veg"
                className="absolute top-2 right-2 h-4 w-4"
              />
            </div>
            <div className="w-3/4 px-2">
              <div className="w-full overflow-hidden flex items-start">
                <div className="w-3/4">
                  <h4>Chicken Pepperoni</h4>
                  <h6>₹ 300</h6>
                </div>{" "}
                <div className="1/4">
                  <button className="bg-white border border-gray-600 text-gray-800 font-normal py-1 px-2 rounded inline-flex items-center">
                    <i className="text-sm fas fa-plus mr-2 text-brand " />
                    <span className="text-sm ">Add</span>
                  </button>
                </div>
              </div>
              <p className="text-xs overflow-ellipsis overflow-hidden">
                dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderOnlineRestaurant;
