import React, { useContext } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { AuthContext } from "../../content/auth";

export const ActivityList = ({ name, children }) => {
  return (
    <>
      <div class="flex flex-col p-4 bg-white my-4 shadow-md">
        <h2 className="text-md font-normal tracking-widest uppercase text-gray-400 pl-3 pb-3">
          {name}
        </h2>
        {children}
      </div>
    </>
  );
};

export const ActivityItem = ({ isActive, name, route }) => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Link to={`/user/${user.id}/${route}`}>
        <div
          className={classnames(
            "w-full py-2 px-3 cursor-pointer hover:bg-gray-200",
            { "border-l-4 border-brand": isActive }
          )}
        >
          <h2
            className={classnames("text-lg font-normal text-gray-700", {
              "text-brand font-semibold": isActive,
            })}
          >
            {name}
          </h2>
        </div>
      </Link>
    </>
  );
};
