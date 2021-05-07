import React from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";

const Tabs = ({ tabList }) => {
  const location = useLocation();

  const currentPath = location.pathname;

  return tabList.map(({ name, iconActve, defaultIcon, routeName }) => (
    <>
      <Link to={`/${routeName}`}>
        <div
          className={classnames(
            " hidden md:flex items-center my-6 w-max	mr-8 pb-2 cursor-pointer transition duration-700 ease-in-out",
            { "border-b-2 border-brand ": currentPath.includes(routeName) }
          )}
        >
          <div
            className={classnames("h-16  p-3 rounded-full", {
              "bg-brandLite": currentPath.includes(routeName),
            })}
          >
            <img
              src={currentPath.includes(routeName) ? iconActve : defaultIcon}
              alt="delivery icon"
              className="h-full"
            />
          </div>
          <h3
            className={classnames("ml-3 text-xl text-gray-700 font-semibold", {
              "text-brand": currentPath.includes(routeName),
            })}
          >
            {name}
          </h3>
        </div>
      </Link>
    </>
  ));
};

export default Tabs;
