import React from "react";
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../Layout/Home.Layout";

const DefaultLayoutHoc = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultLayoutHoc;
