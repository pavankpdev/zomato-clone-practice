import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const IndexUser = () => {
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    history.push(`/user/${id}/reviews`);
  }, []);
  return <div />;
};

export default IndexUser;
