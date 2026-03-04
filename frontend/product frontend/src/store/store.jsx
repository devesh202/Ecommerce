import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import productSlice from "./reducers/productSlice";
import CartSlice from "./reducers/CartSlice";
import { useReducer } from "react";
export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: CartSlice,
    },
})