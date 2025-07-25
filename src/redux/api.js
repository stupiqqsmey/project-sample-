import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ecommerceApi = createApi({
    reducerPath: 'ecommerceApi',
    baseQuery: fetchBaseQuery({
            baseUrl: 'https://fakeapi.platzi.com/api/v1/' }),
    endpoints: (build) => ({

        getProducts: build.query({
            query: ({ offset = 0, limit = 12 }) => `products?offset=${offset}&limit=${limit}`,
        }),
    }),
})

export const { useGetProductsQuery } = ecommerceApi;
