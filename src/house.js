import {createSlice} from "@reduxjs/toolkit";
const houseitemSlice=createSlice({
    name:"houseitem",
    initialState:[],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const houseitemAction= houseitemSlice.actions;
 export default  houseitemSlice; 