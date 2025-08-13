import { baseApi } from "../baseApi.js";

export const authApi = baseApi.injectEndpoints({
    reducerPath: "auth",
    endpoints: (build) => ({
        login: build.mutation({
            query: ({loginForm})=> ({
                url: 'login',
                method: "POST",
                body: loginForm

            })
        })
    })
})

export const {
    useLoginMutation
} = authApi;