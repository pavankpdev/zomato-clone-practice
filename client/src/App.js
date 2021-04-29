import React from "react";

// Hoc
import DefaultHoc from "./HOC/Default.hoc";

// Pages
import HomePage from "./pages/index";

function App() {
  return (
    <div>
      <DefaultHoc component={HomePage} path="/" exact />
    </div>
  );
}

export default App;
