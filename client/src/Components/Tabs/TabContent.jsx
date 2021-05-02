import React from "react";

const TabContent = ({ children, isTabActive }) => {
  return isTabActive && <>{children}</>;
};

export default TabContent;
