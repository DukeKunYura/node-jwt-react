import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPostResponse } from '../interfaces/interfaces';

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholderApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<IPostResponse[], void>({
            query: () => `posts`,
        }),
        getPostById: builder.query<IPostResponse, string>({
            query: (id) => `posts/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = jsonplaceholderApi;
