import React, { Suspense } from "react";
import { Route } from "react-router-dom";

// Context
import { AuthProvider } from "./content/auth";

// Hoc
import DefaultHoc from "./HOC/Default.hoc";

// Pages
import HomePage from "./pages/index";
import Login from "./pages/login";
import Delivery from "./pages/delivery";
import DineOut from "./pages/dineout";
import Nutrition from "./pages/nutrition";
import NightLife from "./pages/nightlife";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Loading</h1>}>
        <Route exact path="/" component={HomePage} />
        <DefaultHoc component={Delivery} path="/delivery" exact />
        <DefaultHoc component={DineOut} path="/dine-out" exact />
        <DefaultHoc component={Nutrition} path="/night-life" exact />
        <DefaultHoc component={NightLife} path="/nutrition" exact />
        <Route exact path="/login" component={Login} />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
