import {createSlice} from "@reduxjs/toolkit";
const luggageitemSlice=createSlice({
    name:"luggageitem",
    initialState:[ 
 ],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const luggageitemAction= luggageitemSlice.actions;
 export default  luggageitemSlice;