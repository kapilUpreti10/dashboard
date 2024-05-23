import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Store from "@/redux/store/Store.ts";
import { RouterProvider } from "react-router-dom";
import Router from "@/router";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);

// react dom.createRoot creates virtual dom
