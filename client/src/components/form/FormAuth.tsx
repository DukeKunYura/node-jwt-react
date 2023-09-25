import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useRegistrationMutation } from "../../api/loginApi";

const FormAuth: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);
    const [sendData, { isLoading }] = useRegistrationMutation();

    const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendData({});
        console.log("чек");


    }

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-header">
                    Featured
                    {isLoading && "loading..."}
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => { handleRegistration(e) }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
            {auth}

        </div>
    )
}
export default FormAuth;