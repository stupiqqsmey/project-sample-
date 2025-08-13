import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {clearTokens, getDecryptedAccessToken} from "../../uitils/tokenUtils.js";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_CAR_BASE_URL,
    prepareHeaders: (headers) => {
        const token = getDecryptedAccessToken();
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },

})
const baseQueryRefresh = async (args, api, extraOptions) => {
    let  result = await baseQuery(args, api, extraOptions);
    if (result?.status === 401) {
        getDecryptedAccessToken()
    }
    else if(!result){
        clearTokens();
    }
}

// Create the base API instance
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery : baseQueryRefresh,
    endpoints: () => ({}), // Placeholder for injecting endpoints later
});

