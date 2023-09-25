import { FC } from "react";

const Spinner: FC = () => {
    return (
        <div className="spinner-border text-primary m-1" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
export default Spinner;