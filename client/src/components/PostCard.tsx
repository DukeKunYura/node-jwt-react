import { FC } from "react";
import { IPostResponse } from "../interfaces/interfaces";

const PostCard: FC<IPostResponse> = ({
    userId,
    id,
    title,
    body,
}) => {

    return (
        <>
            <br />
            <div className="card">
                <h5 className="card-header">Post</h5>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>


    )
}
export default PostCard;