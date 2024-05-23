import { configureStore } from "@reduxjs/toolkit";
import AlertReducer from "../slice/AlertSlice";

const Store = configureStore({
  reducer: {
    alert: AlertReducer,
  },
});

export default Store;
