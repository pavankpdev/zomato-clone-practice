import React from "react";

// Configs
import tabsConfig from "../config/tabs.config";

// Components
import Tabs from "../Components/Tabs";
import DineOutContent from "../Components/DineOutContent";

const DineOut = () => {
  return (
    <>
      <div className=" hidden md:flex items-center my-6">
        <Tabs tabList={tabsConfig} />
      </div>
      <div className="mt-4">
        <DineOutContent />
      </div>
    </>
  );
};

export default DineOut;
