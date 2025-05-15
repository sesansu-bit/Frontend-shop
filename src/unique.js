import {createSlice} from "@reduxjs/toolkit";
const uniqueitemSlice=createSlice({
    name:"uniqueitem",
    initialState:[ ],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const uniqueitemAction= uniqueitemSlice.actions;
 export default  uniqueitemSlice;