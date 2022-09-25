import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header";
import SearchCityTemperature from "./SearchCityTemperature";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <SearchCityTemperature />
  </React.StrictMode>
);
