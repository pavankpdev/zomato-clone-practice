import React from "react";

// Configs
import tabsConfig from "../config/tabs.config";

// Components
import Tabs from "../Components/Tabs";
import NightLifeContent from "../Components/NightLifeContent";

const NightLife = () => {
  return (
    <>
      <div className=" hidden md:flex items-center my-6">
        <Tabs tabList={tabsConfig} />
      </div>
      <div className="mt-4">
        <NightLifeContent />
      </div>
    </>
  );
};

export default NightLife;
