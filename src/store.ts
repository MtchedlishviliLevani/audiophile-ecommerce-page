import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../src/features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type rootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
