// redux/api.js

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl: 'https://fakestoreapi.in/api'}),
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => 'products',
        }),

        // Add Mutation
        addProduct: build.mutation({
            query: (newProduct) => ({
                url: 'products',
                method: 'POST',
                body: newProduct,
            }),
        }),
    }),
});

export const { useGetProductsQuery, useAddProductMutation } = ecommerceApi;
