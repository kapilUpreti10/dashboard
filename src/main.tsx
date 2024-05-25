import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Store from "@/redux/store/Store.ts";
import { RouterProvider } from "react-router-dom";
import Router from "@/router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={Router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName={"text-[1.1rem], font-semibold, bg-green-500, text-white"}
      />
    </Provider>
  </React.StrictMode>
);

// react dom.createRoot creates virtual dom
