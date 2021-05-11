import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";

// Context
import { AuthProvider } from "./content/auth";

// Hoc
import DefaultHoc from "./HOC/Default.hoc";
import ProfileHOC from "./HOC/Profile.HOC";
import RestaurantHOC from "./HOC/Restaurant.HOC";

// Pages
import HomePage from "./pages/index";
import Login from "./pages/login";
import Delivery from "./pages/delivery";
import DineOut from "./pages/dineout";
import Nutrition from "./pages/nutrition";
import NightLife from "./pages/nightlife";
import Reviews from "./pages/Profile/reviews";
import Photos from "./pages/Profile/photos";
import OrderHistory from "./pages/Profile/OrderHistory";
import CurrentOrders from "./pages/Profile/currentOrders";
import MyAddress from "./pages/Profile/myAddresses";
import Bookamrks from "./pages/Profile/bookmarks";
import OverviewRestaurant from "./pages/Restaurant/overview";
import OrderOnlineRestaurant from "./pages/Restaurant/orderOnline";
import ReviewRestaurant from "./pages/Restaurant/reviews";
import MenuRestaurant from "./pages/Restaurant/menu";
import PhotosRestaurant from "./pages/Restaurant/photos";
import IndexUser from "./pages/Profile/index";
import IndexRestaurant from "./pages/Restaurant/index";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Loading</h1>}>
        <Route exact path="/" component={HomePage} />
        <DefaultHoc component={Delivery} path="/delivery" exact />
        <DefaultHoc component={DineOut} path="/dine-out" exact />
        <DefaultHoc component={NightLife} path="/night-life" exact />
        <DefaultHoc component={Nutrition} path="/nutrition" exact />
        <ProfileHOC component={IndexUser} path="/user/:id/" exact />
        <ProfileHOC component={Reviews} path="/user/:id/reviews" exact />
        <ProfileHOC component={Photos} path="/user/:id/photos" exact />
        <ProfileHOC
          component={OrderHistory}
          path="/user/:id/order-history"
          exact
        />
        <ProfileHOC
          component={CurrentOrders}
          path="/user/:id/current-history"
          exact
        />
        <ProfileHOC component={MyAddress} path="/user/:id/my-address" exact />
        <ProfileHOC component={Bookamrks} path="/user/:id/bookmarks" exact />
        <RestaurantHOC
          component={IndexRestaurant}
          path="/restaurant/:id/"
          exact
        />
        <RestaurantHOC
          component={OverviewRestaurant}
          path="/restaurant/:id/overview"
          exact
        />
        <RestaurantHOC
          component={OrderOnlineRestaurant}
          path="/restaurant/:id/order-online"
          exact
        />
        <RestaurantHOC
          component={ReviewRestaurant}
          path="/restaurant/:id/reviews"
          exact
        />
        <RestaurantHOC
          component={MenuRestaurant}
          path="/restaurant/:id/menu"
          exact
        />
        <RestaurantHOC
          component={PhotosRestaurant}
          path="/restaurant/:id/photos"
          exact
        />
        <Route exact path="/login" component={Login} />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
