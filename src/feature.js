import {createSlice} from "@reduxjs/toolkit";
const featureitemSlice=createSlice({
    name:"featureitem",
    initialState:[],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const featureitemAction= featureitemSlice.actions;
 export default  featureitemSlice;