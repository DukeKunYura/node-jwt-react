import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const host = process.env.REACT_APP_HOST as string;
// const port = process.env.REACT_APP_FEEDBACK_PORT as string;
const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://${host}:${port}/api/`,
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        }
    }),
    endpoints: (build) => ({
        // регистрация
        registration: build.mutation({
            query: (data) => ({
                url: 'registration/',
                method: 'POST',
                body: data
            })
        }),
        // вход
        login: build.mutation({
            query: (data) => ({
                url: 'login/',
                method: 'POST',
                body: data
            })
        })
    })
});
export const {
    useRegistrationMutation,
    useLoginMutation
} = loginApi;
