import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./authenticationSlice";
import { cartReducer } from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";


const persistConfigCart = {
  key: "cart",
  storage,
};
const persistConfigAuth = {
  key: "auth",
  storage,
};
const persistedReducerCart = persistReducer(persistConfigCart, cartReducer);
const persistedReducerAuth = persistReducer(persistConfigAuth, authenticationReducer);


/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
export const store = configureStore({
  reducer: {
    auth: persistedReducerAuth,
    cart: persistedReducerCart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
