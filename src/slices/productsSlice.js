import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
  categories: [],
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
      const { loading } = action.payload
      return {
        ...state,
        loading: loading,
      };
    },
    setError: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
    setCategories: (state) => {
      return {
        ...state,
        categories: [...new Set(state.products.map(product => product.category))]
      }
    }
  },
});

export const { setProducts, setLoading, setError, setCategories } =
  productSlice.actions;

export default productSlice.reducer;
