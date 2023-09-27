import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

const baseQuery = fetchBaseQuery({
    baseUrl: `http://${host}:${port}/api/`,
    credentials: "include",
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        const authToken = localStorage.getItem('access_token');
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
        // try to get a new token
        const refreshResult = await tokenQuery(`refresh`, api, extraOptions);
        console.log(refreshResult);
        if (refreshResult.data) {
            const refeshTokenResult = refreshResult.data as any;
            // set the new token
            localStorage.setItem('access_token', refeshTokenResult.accessToken);
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else {
            // const authToken = localStorage.getItem('refresh_token');
            // if (authToken) {
            //     await api.dispatch(fetchLogout(authToken));
            // }
            // localStorage.removeItem('access_token');
            // localStorage.removeItem('refresh_token');
        }
    }
    return result;
};

export default baseQueryWithReauth;