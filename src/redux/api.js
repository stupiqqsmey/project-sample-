import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define the API slice
export const ecommerceApi = createApi({
    reducerPath: "ecommerceApi", // Unique key for reducer

    baseQuery: fetchBaseQuery({
        baseUrl: "https://car-nextjs-api.cheatdev.online/",
    }),

    endpoints: (build) => ({

        // GET
        getProducts: build.query({
            query: ({ page = 0, limit = 10 }) => `cars?skip=${page}&limit=${limit}`,
        }),

        // GET cars by :id
        getProductById: build.query({
            query: (id) => `cars/${id}`,
        }),

        // POST /cars
        createProducts: build.mutation({
            query: ({ newCar, accessToken }) => ({
                url: "cars",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: newCar,
            }),
        }),

        // PUT /cars/:id
        updateProduct: build.mutation({
            query: ({ id, updatedCar, accessToken }) => ({
                url: `cars/${id}`,
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: updatedCar,
            }),
        }),

        // DELETE /cars/:id
        deleteProduct: build.mutation({
            query: ({ id, accessToken }) => ({
                url: `cars/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
        }),
    }),
});

// Export hooks for usage in components
export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductsMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = ecommerceApi;
