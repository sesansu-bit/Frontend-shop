import {createSlice} from "@reduxjs/toolkit";
const beautyitemSlice=createSlice({
    name:"beautyitem",
    initialState:[],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const beautyitemAction= beautyitemSlice.actions;
 export default  beautyitemSlice;