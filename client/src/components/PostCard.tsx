import { FC } from "react";
import { IPostResponse } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom";

const PostCard: FC<IPostResponse> = ({
    userId,
    id,
    title,
    body,
}) => {
    const navigate = useNavigate();

    return (
        <>
            <br />
            <div className="card">
                <h5 className="card-header">Post</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <a
                        onClick={() => { navigate(`/posts/${id}`) }}
                        className="btn btn-primary"
                    >Go somewhere</a>
                </div>
            </div>
        </>


    )
}
export default PostCard;