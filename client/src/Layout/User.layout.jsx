import React from "react";
import { useLocation } from "react-router-dom";

import NavBar from "../Components/Navbar/Navbar";

import { ActivityItem, ActivityList } from "../Components/Profile/ActivityList";

const UserLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <NavBar />
        <div className="relative overflow-hidden h-96 w-full md:h-56 rounded-md md:rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1570295274677-520120b57b4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="bg"
            className="w-full h-full object-cover object-bottom	"
          />
          <div className="absolute inset-0 z-10 opacity-60 bg-black h-96 w-full md:h-56 rounded-md md:rounded-lg"></div>
          <div className="absolute w-full h-full z-30 inset-0 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-around">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <div className="block border w-24 h-24 rounded-full border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1620285327296-f71539979743?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=377&q=80"
                  alt="avatar"
                  className="w-full h-full rounded-full"
                />
              </div>
              <h2 className="text-white text-xl font-semibold">Pavan Kumar</h2>
            </div>
            <div className="flex flex-col items-center gap-4 md:flex-col-reverse md:items-end">
              <div className="flex items-center justify-around gap-4">
                <div className="text-xl text-white flex flex-col justify-center items-center pr-3 border-r-2 border-white">
                  <h3>03</h3>
                  <h3 className="opacity-60">Reviews</h3>
                </div>
                <div className="text-xl text-white flex flex-col justify-center items-center pr-3 border-r-2 border-white">
                  <h3>03</h3>
                  <h3 className="opacity-60">Reviews</h3>
                </div>
                <div className="text-xl text-white flex flex-col justify-center items-center">
                  <h3>03</h3>
                  <h3 className="opacity-60">Reviews</h3>
                </div>
              </div>
              <button className="bg-pink-600 text-white px-3 py-2 rounded-lg">
                <i className="fas fa-pencil-alt fa-xs" /> Edit Profile
              </button>
            </div>
          </div>
        </div>
        <main class="flex w-full h-screen">
          <aside class="w-80 h-screen bg-white w-fulll hidden sm:block">
            <ActivityList name="Activity">
              <ActivityItem
                name="Reviews"
                isActive={currentPath.includes("reviews")}
                route="reviews"
              />
              <ActivityItem
                name="Photos"
                isActive={currentPath.includes("photos")}
                route="photos"
              />
              <ActivityItem
                name="Bookmarks"
                isActive={currentPath.includes("bookmarks")}
                route="bookmarks"
              />
            </ActivityList>
            <ActivityList name="ONLINE ORDERING">
              <ActivityItem
                name="Current Order"
                isActive={currentPath.includes("current-history")}
                route="current-history"
              />
              <ActivityItem
                name="Order History"
                isActive={currentPath.includes("order-history")}
                route="order-history"
              />
              <ActivityItem
                name="My addresses"
                isActive={currentPath.includes("my-address")}
                route="my-address"
              />
            </ActivityList>
          </aside>

          <section class="w-full p-4">
            <div class="w-full h-64 border-dashed border-4 p-4 text-md">
              {children}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default UserLayout;
