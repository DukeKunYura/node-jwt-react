import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setRole, setUser } from "../../redux/slices/authSlice";
import Spinner from "../Spinner";
import { registration } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const FormRegistration: FC = () => {
    const auth = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true)
        if (password === confirmPassword && email !== '') {
            setPasswordMessage('');
            const response = await registration(email, password);
            if (response) {
                localStorage.setItem('token', response.data.accessToken);
                dispatch(setUser(response.data.user));
                dispatch(setRole('guest'));
            }
            navigate("/login");

        } else {
            setPasswordMessage('пароли не совпадают');
        }
        setIsLoading(false);
    }

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-header">
                    {isLoading ? "loading..." : "Registration"}
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => { handleRegistration(e) }}>
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword2" className="form-label">Confirm password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                id="exampleInputPassword2" />
                            <div id="passwordHelp" className="form-text">
                                {passwordMessage !== '' && passwordMessage}
                            </div>
                        </div>
                        <div className="row gy-2 gx-3 align-items-center">
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                            <div className="col-auto">
                                {isLoading && <Spinner />}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {auth.role}

        </div>
    )
}
export default FormRegistration;