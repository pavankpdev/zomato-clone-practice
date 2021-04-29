import React from "react";
// Components
import Navbar from "../Components/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="container mx-auto px-4 lg:px-20">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
