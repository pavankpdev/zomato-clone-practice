import React from "react";

// Configs
import tabsConfig from "../config/tabs.config";

// Components
import Tabs from "../Components/Tabs";
import DeliveryContent from "../Components/DeliveryContent";

const Delivery = () => {
  return (
    <>
      <div className=" hidden md:flex items-center my-6">
        <Tabs tabList={tabsConfig} />
      </div>
      <div className="mt-4">
        <DeliveryContent />
      </div>
    </>
  );
};

export default Delivery;
