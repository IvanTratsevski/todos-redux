import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./app-router";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
