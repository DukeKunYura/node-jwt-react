import { FC } from "react";
import { useGetPostByIdQuery, useGetPostsQuery } from "../../api/jsonplaceholderApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const TestSkip: FC = () => {
    const { data: posts } = useGetPostsQuery();
    const { data: post } = useGetPostByIdQuery(posts ?? skipToken);
    //const { data: post } = useGetPostByIdQuery(5);



    return (
        <>
            <div>TestSkip</div>
            {posts && <div>посты</div>}
            {post && post}
        </>


    )
}
export default TestSkip;