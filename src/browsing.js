import {createSlice} from "@reduxjs/toolkit";
const browsingitemSlice=createSlice({
    name:"browsingitem",
    initialState:[],
    reducers: {
        addInitialItems: (state, action) => {
            return action.payload;
        }
      }
});
 export const browsingitemAction= browsingitemSlice.actions;
 export default  browsingitemSlice;

