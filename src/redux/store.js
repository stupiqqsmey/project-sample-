// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { ecommerceApi } from './api.js';
import counterReducer from '../redux/features/counter/counterSlice.js';
import { setupListeners } from '@reduxjs/toolkit/query';

// Create and configure the Redux store
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
