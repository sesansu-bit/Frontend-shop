import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activecategory: "", 
};

const activecategorySlice = createSlice({
  name: "activeCategory",
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activecategory = action.payload;
    },
  },
});

export const activecategoryAction  = activecategorySlice.actions;
export default activecategorySlice;
