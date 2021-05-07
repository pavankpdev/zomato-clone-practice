import React, { Suspense } from "react";
import { Route } from "react-router-dom";

// Context
import { AuthProvider } from "./content/auth";

// Hoc
import DefaultHoc from "./HOC/Default.hoc";

// Pages
import HomePage from "./pages/index";
import Login from "./pages/login";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<h1>Loading</h1>}>
        <DefaultHoc component={HomePage} path="/" exact />
        <Route exact path="/login" component={Login} />
      </Suspense>
    </AuthProvider>
  );
}

export default App;
