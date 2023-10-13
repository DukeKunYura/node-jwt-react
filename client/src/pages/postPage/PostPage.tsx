import { FC } from "react";
import { useGetPostByIdQuery } from "../../api/jsonplaceholderApi";
import { useNavigate, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import BreadCrumbs, { TBreadCrumb } from "../../components/BreadCrumbs";

const PostPage: FC = () => {
    const params = useParams();
    const { data: post } = useGetPostByIdQuery(params.id ?? skipToken);
    const navigate = useNavigate();

    const routes: TBreadCrumb[] = [
        { breadcrumb: 'Posts', path: '/posts' },
        { breadcrumb: 'Post', path: null }
    ];

    return (
        <div className="container" >
            <br />
            <BreadCrumbs routes={routes} />
            <br />
            <div className="card text-center">
                <div className="card-header">
                    Post
                </div>
                <div className="card-body">
                    <h5 className="card-title">{post?.title}</h5>
                    <p className="card-text">{post?.body}</p>
                    <a
                        onClick={() => { navigate("/posts") }}
                        className="btn btn-primary"
                    >Back</a>
                </div>
                <div className="card-footer text-muted">
                    2 days ago
                </div>
            </div>

        </div>


    )
}
export default PostPage;