import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// Components

const HomePage = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.screen.width >= 768) history.push("/delivery");
  }, []);

  return <></>;
};

export default HomePage;
