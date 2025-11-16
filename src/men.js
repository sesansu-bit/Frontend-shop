import {createSlice} from "@reduxjs/toolkit";
const menitemSlice=createSlice({
    name:"menitem",
    initialState:[],
    reducers: {
        addInitialItems: (store, action) => {
            return action.payload;
        }
      }
});
 export const menitemAction= menitemSlice.actions;
 export default  menitemSlice;




 