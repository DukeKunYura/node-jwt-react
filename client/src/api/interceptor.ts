import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

const baseQuery = fetchBaseQuery({
    baseUrl: `http://${host}:${port}/api/`,
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        const authToken = localStorage.getItem('token');
        if (authToken !== '') {
            headers.set('Authorization', `Bearer ${authToken}`);
        }
        return headers;
    },
});

const tokenQuery = fetchBaseQuery({
    baseUrl: `http://${host}:${port}/api/`,
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        return headers;
    }
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
    args,
    api,
    extraOptions
) => {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
        // попытка получить новый токен
        const refreshResult = await tokenQuery(`refresh`, api, extraOptions);
        if (refreshResult.data) {
            const refeshTokenResult = refreshResult.data as any;
            // в случае успеха токен сохраняется в localStorage
            localStorage.setItem('token', refeshTokenResult.accessToken);
            // повтор исходного запроса
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export default baseQueryWithReauth;