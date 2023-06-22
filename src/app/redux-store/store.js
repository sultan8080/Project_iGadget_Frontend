import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './authenticationSlice';
import { cartReducer } from "./cartSlice";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer);

/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
export const store = configureStore({
    reducer: {
        auth: authenticationReducer,
        cart: persistedReducer,
    }, 
})

export const persistor = persistStore(store);
  
// export const persistor = persistStore(store, null, () => {
//     store.dispatch({ type: 'persist/PERSIST' }); 
// });