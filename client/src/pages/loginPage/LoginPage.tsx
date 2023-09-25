import { FC } from "react";
import FormAuth from "../../components/form/FormAuth";
import { setAuth } from "../../redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import FormRegistration from "../../components/form/FormRegistration";

const Login: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);
    const dispatch = useAppDispatch();

    return (
        <div className="container">
            {auth === "guest" && <FormRegistration />}
            {auth === "admin" && <FormAuth />}
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