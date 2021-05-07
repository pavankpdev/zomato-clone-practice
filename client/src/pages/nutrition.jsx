import React from "react";

// Configs
import tabsConfig from "../config/tabs.config";

// Components
import Tabs from "../Components/Tabs";
import NutritionContent from "../Components/NutritionContent";

const Nutrition = () => {
  return (
    <>
      <div className=" hidden md:flex items-center my-6">
        <Tabs tabList={tabsConfig} />
      </div>
      <div className="mt-4">
        <NutritionContent />
      </div>
    </>
  );
};

export default Nutrition;
