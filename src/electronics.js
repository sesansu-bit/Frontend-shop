import {createSlice} from "@reduxjs/toolkit";
const electronicsitemSlice=createSlice({
    name:"electronicsitem",
    initialState:[ ],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const elctronicsitemAction= electronicsitemSlice.actions;
 export default  electronicsitemSlice;