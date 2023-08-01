import { configureStore } from "@reduxjs/toolkit";
import  storeSlice from "./storeSlice"



const store = configureStore({
    reducer: {
        users: storeSlice,
    }
});

export default store