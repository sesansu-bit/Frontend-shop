import {createSlice} from "@reduxjs/toolkit";
const womenitemSlice=createSlice({
    name:"womenitem",
    initialState:[],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const womenitemAction= womenitemSlice.actions;
 export default  womenitemSlice;