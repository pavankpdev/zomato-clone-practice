import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

// Layout
import UserLayout from "../Layout/User.layout";

const ProfileHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <UserLayout>
            <Component {...props} />
          </UserLayout>
        )}
      />
    </>
  );
};

export default ProfileHOC;
