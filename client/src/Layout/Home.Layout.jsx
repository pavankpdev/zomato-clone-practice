import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useLocation, Link } from "react-router-dom";

// Components
import Navbar from "../Components/Navbar/Navbar";

const HomeLayout = ({ children }) => {
  const [showMenu, setShowMenu] = useState(true);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    var lastScrollTop = 0;

    // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
    window.addEventListener(
      "scroll",
      function () {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
          setShowMenu(false);
        } else {
          setShowMenu(true);
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      },
      false
    );
    return window.removeEventListener("scroll", function () {
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      if (st > lastScrollTop) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    });
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <Navbar />
        <div className="md:hidden">
          <div className="rounded-full bg-white flex items-center gap-3 text-gray-600 w-full border border-gray-200 shadow-md px-2">
            <i className="fal fa-search mx-2"></i>
            <input
              type="search"
              name="serch"
              placeholder="Search for restaurant"
              className="bg-white h-10  rounded-full text-sm focus:outline-none w-full"
            />
          </div>
        </div>
        <div>{children}</div>
      </div>
      <div
        className={classnames(
          "z-50 transition-all fixed inset-x-0 bottom-0  bg-white shadow-lg px-3 md:hidden",
          { "h-0 py-0 ": !showMenu, "h-16 py-2 ": showMenu }
        )}
      >
        <div className="flex items-center justify-around">
          {[
            {
              iconDefault: "fal fa-shopping-cart fa-lg text-gray-900",
              iconActive: "fas fa-shopping-cart fa-lg text-brand",
              name: "Delivery",
              route: "/delivery",
            },
            {
              iconDefault: "fal fa-shoe-prints fa-lg text-gray-900",
              iconActive: "fas fa-shoe-prints fa-lg text-brand",
              name: "Dining Out",
              route: "/dine-out",
            },
            {
              iconDefault: "fal fa-beer fa-lg text-gray-900",
              iconActive: "fas fa-beer fa-lg text-brand",
              name: "Night Life",
              route: "/night-life",
            },
            {
              iconDefault: "fal fa-heartbeat fa-lg text-gray-900",
              iconActive: "fas fa-heartbeat fa-lg text-brand",
              name: "Nutrition",
              route: "/nutrition",
            },
          ].map(({ iconActive, iconDefault, name, route }) => (
            <Link to={route}>
              <div
                className="flex flex-col items-center pt-2"
                key={`a${Math.random()}${Date.now()}`}
              >
                <i
                  className={
                    currentPath.includes(route) ? iconActive : iconDefault
                  }
                />
                <small
                  className={classnames("text-gray-900", {
                    "text-brand": currentPath.includes(route),
                  })}
                >
                  {name}
                </small>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
