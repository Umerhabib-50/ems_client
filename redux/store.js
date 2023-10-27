// store.js
import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../redux/adminSlice";
const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

export default store;
