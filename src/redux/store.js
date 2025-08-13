// redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import { ecommerceApi } from './features/car/car.js';
import counterReducer from '../redux/features/counter/counterSlice.js';
import { setupListeners } from '@reduxjs/toolkit/query';
import {baseApi} from "./baseApi.js";

// Create and configure the Redux store
const store = configureStore({

    reducer: {
        [ecommerceApi.reducerPath]: baseApi.reducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(ecommerceApi.middleware),
});

setupListeners(store.dispatch);

export default store;
