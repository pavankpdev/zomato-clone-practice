import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const IndexRestaurant = () => {
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    history.push(`/restaurant/${id}/overview`);
  }, []);
  return <div />;
};

export default IndexRestaurant;
