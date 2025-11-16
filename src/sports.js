import {createSlice} from "@reduxjs/toolkit";
const sportsitemSlice=createSlice({
    name:"sportsitem",
    initialState:[],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const sportsitemAction= sportsitemSlice.actions;
 export default  sportsitemSlice;