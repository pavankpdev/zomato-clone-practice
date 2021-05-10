import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

const RestaurantTabs = ({ name, route, isActive }) => {
  return (
    <>
      <Link to={`/restaurant/dada/${route}`}>
        <div
          className={classnames("py-2 px-4 ", {
            "border-b-2 border-brand": isActive,
          })}
        >
          <h3
            className={classnames("text-gray-700 font-semibold lg:text-xl", {
              "text-brand": isActive,
            })}
          >
            {name}
          </h3>
        </div>
      </Link>
    </>
  );
};

export default RestaurantTabs;
