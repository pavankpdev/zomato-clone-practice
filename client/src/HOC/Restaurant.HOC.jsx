import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

// Layout
import RestaurantLayout from "../Layout/Restaurant.layout";

const RestaurantHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <RestaurantLayout>
            <Component {...props} />
          </RestaurantLayout>
        )}
      />
    </>
  );
};

export default RestaurantHOC;
