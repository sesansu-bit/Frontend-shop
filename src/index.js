import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Using localStorage as the storage engine

// Importing all slices
import authSlice from "./auth.js";
import featureitemSlice from "./feature.js";
import bagitemSlice from "./bag.js";
import browsingitemSlice from "./browsing.js";
import uniqueitemSlice from "./unique.js";
import itemsSlice from "./items.js";
import houseitemSlice from "./house.js";
import menitemSlice from "./men.js";
import sportsitemSlice from "./sports.js";
import beautyitemSlice from "./beauty.js";
import womenitemSlice from "./women.js";
import wishlistitemSlice from "./wishlist.js";
import luggageitemSlice from "./luggage.js";
import electronicsitemSlice from "./electronics.js";
import fetchStatusSlice from "./fetching.js";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,  // Using localStorage
  whitelist: [
    "bagitem",
    "wishlistitem",
    "items",
    "auth",
  ],
};

// Combining reducers
const rootReducer = combineReducers({
  auth: authSlice.reducer,
  items: itemsSlice.reducer,
  browsingitem: browsingitemSlice.reducer,
  featureitem: featureitemSlice.reducer,
  uniqueitem: uniqueitemSlice.reducer,
  menitem: menitemSlice.reducer,
  houseitem: houseitemSlice.reducer,
  womenitem: womenitemSlice.reducer,
  wishlistitem: wishlistitemSlice.reducer,
  sportsitem: sportsitemSlice.reducer,
  luggageitem: luggageitemSlice.reducer,
  electronicsitem: electronicsitemSlice.reducer,
  beautyitem: beautyitemSlice.reducer,
  bagitem: bagitemSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer,

});

// Wrapping reducers with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store configuration with middleware
const sypreenstore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(sypreenstore);

export default sypreenstore;
