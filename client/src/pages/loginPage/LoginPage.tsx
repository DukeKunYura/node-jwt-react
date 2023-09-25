import { FC } from "react";
import FormAuth from "../../components/form/FormAuth";
import { setAuth } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Login: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <div className="container">
            <FormAuth />
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => { dispatch(setAuth("admin")) }}>Admin</button>
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => { dispatch(setAuth("guest")) }}>Guest</button>
        </div>
    )
}
export default Login;