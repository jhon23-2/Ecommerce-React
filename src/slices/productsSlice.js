import { createSlice } from "@reduxjs/toolkit";
import products from "../mock/products.json";

const initialState = {
  products: products,
  loading: false,
  error: null,
  categories: [...new Set(products.map((product) => product.category))],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      return {
        ...state,
        products: action.payload,
      };
    },
    setLoading: (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const { setProducts, setLoading, setError, setCategories } =
  productSlice.actions;

export default productSlice.reducer;
