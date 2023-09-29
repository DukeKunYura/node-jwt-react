import { FC } from "react";
import { useGetPostsQuery } from "../../api/jsonplaceholderApi";
import PostCard from "../../components/PostCard";

const PostsPage: FC = () => {
    const { data: posts } = useGetPostsQuery();



    return (
        <div className="container">
            {posts && posts.map(item => <PostCard
                key={item.id}
                userId={item.userId}
                id={item.id}
                title={item.title}
                body={item.body}
            />)}

        </div>


    )
}
export default PostsPage;