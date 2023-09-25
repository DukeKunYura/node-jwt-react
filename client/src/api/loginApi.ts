import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RegisterUserRequestBody, RegisterUserResponseBody } from '../interfaces/interfaces';
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
        registration: build.mutation<RegisterUserResponseBody, RegisterUserRequestBody>({
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
        }),
        // выход
        logout: build.mutation({
            query: (data) => ({
                url: 'logout/',
                method: 'POST',
                body: data
            })
        })
    })
});
export const {
    useRegistrationMutation,
    useLoginMutation,
    useLogoutMutation
} = loginApi;
