import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../slices/cartSlice";
import productSliceReducer from "../slices/productsSlice";

export const store = configureStore({
  reducer: {
    products: productSliceReducer,
    cart: cartSliceReducer,
  },
});
