import { baseApi } from "../../baseApi.js";

// Define the API slice
export const ecommerceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({

        // GET all products
        getProducts: build.query({
            query: ({ page = 0, limit = 10 }) => `cars?skip=${page}&limit=${limit}`,
            providesTags: ["Car"],
        }),

        // GET single product by ID
        getProductById: build.query({
            query: (id) => `cars/${id}`,
            providesTags: (result, error, id) => [{ type: "Car", id }],
        }),

        // POST new product
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
            invalidatesTags: ["Car"],
        }),

        // PUT update product
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
            invalidatesTags: (result, error, { id }) => [{ type: "Car", id }],
        }),

        // DELETE product
        deleteProduct: build.mutation({
            query: ({ id, accessToken }) => ({
                url: `cars/${id}`,
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Car", id }],
        }),

    }),
});

// Export hooks
export const {
    useGetProductsQuery,
    useGetProductByIdQuery,
    useCreateProductsMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = ecommerceApi;
