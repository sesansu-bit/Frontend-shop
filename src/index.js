import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Using localStorage as the storage engine

// Importing all slices
import authReducer from "./auth";
import featureitemSlice from "./feature";
import bagitemSlice from "./bag";
import browsingitemSlice from "./browsing";
import uniqueitemSlice from "./unique";
import itemsSlice from "./items";
import houseitemSlice from "./house";
import menitemSlice from "./men";
import sportsitemSlice from "./sports";
import beautyitemSlice from "./beauty";
import womenitemSlice from "./women";
import wishlistitemSlice from "./wishlist";
import luggageitemSlice from "./luggage";
import electronicsitemSlice from "./electronics";
import fetchStatusSlice from "./fetching";

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
  auth: authReducer,
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
