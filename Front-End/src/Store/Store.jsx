// store.js
import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./storeSlice"; // Import the storeSlice
// import { unsplashApi} from './Unsplashapi'; // Import the unsplashApi from RTK-Query API slice

const store = configureStore({
  reducer: {
    users: storeSlice,
  },
})
export default store;
