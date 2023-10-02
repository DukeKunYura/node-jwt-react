import { FC } from "react";
import { useNavigate } from "react-router-dom";

const NoMatchPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className="container" >
            <br />
            <div className="card text-center">
                <div className="card-header">
                    Content
                </div>
                <div className="card-body">
                    <h5 className="card-title">{"not found"}</h5>
                    <p className="card-text">{"404"}</p>
                    <a
                        onClick={() => { navigate(-1) }}
                        href="#"
                        className="btn btn-primary"
                    >Back</a>
                </div>
                <div className="card-footer text-muted">
                    .....
                </div>
            </div>

        </div>
    )
}
export default NoMatchPage;