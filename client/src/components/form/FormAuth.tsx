import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useLoginMutation } from "../../api/loginApi";
import { useNavigate } from "react-router-dom";
import { setActiveLink } from "../../redux/slices/masterSlice";

const FormAuth: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);
    const [sendData, { isLoading }] = useLoginMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendData({ email, password });
        setEmail('');
        setPassword('');
    }

    const handleRegistrationLink = () => {
        dispatch(setActiveLink('Login'));
        navigate('/registration');
    }

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-header">
                    {isLoading ? "loading..." : "Log-in"}
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => { handleLogin(e) }}>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                        </div>
                        <div className="row gy-2 gx-3 align-items-center">
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Log-in</button>
                            </div>
                            <div className="col-auto">
                                <button onClick={handleRegistrationLink} type="button" className="btn btn-outline-secondary">Registration</button>
                            </div>
                        </div>



                    </form>
                </div>
            </div>
            {auth}

        </div>
    )
}
export default FormAuth;