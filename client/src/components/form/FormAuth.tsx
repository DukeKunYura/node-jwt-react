import { FC, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { useLoginMutation } from "../../api/loginApi";

const FormAuth: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);
    const [sendData, { isLoading }] = useLoginMutation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendData({ email, password });
        setEmail('');
        setPassword('');
    }

    return (
        <div className="container">
            <br />
            <div className="card">
                <div className="card-header">
                    {isLoading ? "loading..." : "Log in"}
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