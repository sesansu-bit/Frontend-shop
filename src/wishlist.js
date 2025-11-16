// wishlistSlice.js
import { createSlice } from "@reduxjs/toolkit";

const wishlistitemSlice = createSlice({
  name: "wishlistitem",
  initialState: [],
  reducers: {
    setWishlist: (state, action) => action.payload,  // only for full fetch

    addToWishlist: (state, action) => {
      state.push(action.payload); // single product object
    },

    removeFromWishlist: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const wishlistitemAction = wishlistitemSlice.actions;
export default wishlistitemSlice;
