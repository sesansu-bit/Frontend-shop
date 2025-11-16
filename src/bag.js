// bagSlice.js
import { createSlice } from "@reduxjs/toolkit";

const bagitemSlice = createSlice({
  name: "bagitem",
  initialState: [],
  reducers: {
    setCart: (state, action) => action.payload,

    addToCart: (state, action) => {
      state.push(action.payload); // single product object
    },

    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const bagitemAction = bagitemSlice.actions;

export default bagitemSlice;
