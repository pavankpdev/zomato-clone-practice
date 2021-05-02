import React, { useState } from "react";

// Components
import Tabs from "../Components/Tabs";
import TabContent from "../Components/Tabs/TabContent";
import DeliveryContent from "../Components/DeliveryContent";
import DineOutContent from "../Components/DineOutContent";
import NightLifeContent from "../Components/NightLifeContent";

const HomePage = () => {
  const [activeTabs, setActiveTabs] = useState("delivery");
  const tabsContent = [
    {
      id: 1,
      name: "Delivery",
      iconActve:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
      defaultIcon:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png?output-format=webp",
      isActive: activeTabs === "delivery",
      toggleTab: () => setActiveTabs("delivery"),
    },
    {
      id: 2,
      name: "Dining Out",
      iconActve:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
      defaultIcon:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp",
      isActive: activeTabs === "dining",
      toggleTab: () => setActiveTabs("dining"),
    },
    {
      id: 3,
      name: "Nightlife",
      iconActve:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png?output-format=webp",
      defaultIcon:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp",
      isActive: activeTabs === "nightlife",
      toggleTab: () => setActiveTabs("nightlife"),
    },
  ];

  return (
    <>
      <div className=" hidden md:flex items-center my-6">
        <Tabs tabList={tabsContent} />
      </div>
      <div className="mt-4">
        <TabContent isTabActive={activeTabs === "delivery"}>
          <DeliveryContent />
        </TabContent>
        <TabContent isTabActive={activeTabs === "dining"}>
          <DineOutContent />
        </TabContent>
        <TabContent isTabActive={activeTabs === "nightlife"}>
          <NightLifeContent />
        </TabContent>
      </div>
    </>
  );
};

export default HomePage;
