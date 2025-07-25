import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/features/counter/couterSlice.js';
import { ecommerceApi } from './api.js';
import { setupListeners } from '@reduxjs/toolkit/query';


// ✅ Create the store using Redux Toolkit
const store = configureStore({
    reducer: {
        [ecommerceApi.reducerPath]: ecommerceApi.reducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecommerceApi.middleware),
});

setupListeners(store.dispatch);

export default store;
