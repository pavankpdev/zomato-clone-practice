import React from "react";
import classnames from "classnames";

const Tabs = ({ tabList }) => {
  return tabList.map(
    ({ name, iconActve, defaultIcon, isActive, toggleTab }) => (
      <>
        <div
          className={classnames(
            " hidden md:flex items-center my-6 w-max	mr-8 pb-2 cursor-pointer transition duration-700 ease-in-out",
            { "border-b-2 border-brand ": isActive }
          )}
          onClick={toggleTab}
        >
          <div
            className={classnames("h-16  p-3 rounded-full", {
              "bg-brandLite": isActive,
            })}
          >
            <img
              src={isActive ? iconActve : defaultIcon}
              alt="delivery icon"
              className="h-full"
            />
          </div>
          <h3
            className={classnames("ml-3 text-xl text-gray-700 font-semibold", {
              "text-brand": isActive,
            })}
          >
            {name}
          </h3>
        </div>
      </>
    )
  );
};

export default Tabs;
