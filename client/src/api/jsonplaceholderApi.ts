import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPostResponses } from '../interfaces/interfaces';

export const jsonplaceholderApi = createApi({
    reducerPath: 'jsonplaceholderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPosts: builder.query<IPostResponses, void>({
            query: () => `posts`,
        }),
        getPostById: builder.query<string, number>({
            queryFn: () => {
                return { data: "88" };
            },
        })
    }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = jsonplaceholderApi