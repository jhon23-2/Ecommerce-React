import { createSlice } from "@reduxjs/toolkit";

export const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      return [...state, action.payload];
    },
    removeCart: (state, action) => {
      const { id } = action.payload;
      return [...state].filter((item) => item.id !== id);
    },
    clearCart: () => {
      return [];
    },
    stockCart: (state, action) => {
      const { id, quantity } = action.payload;

      return [...state].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: quantity,
          };
        }

        return item;
      });
    },
  },
});

export const { addCart, clearCart, removeCart, stockCart } = cartSlice.actions;
export default cartSlice.reducer;
