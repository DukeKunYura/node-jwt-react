import { FC } from "react";
import FormAuth from "../../components/form/FormAuth";
import { setAuth } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";

const Login: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <FormAuth />
            <button onClick={() => { dispatch(setAuth("admin")) }}>Admin</button>
            <button onClick={() => { dispatch(setAuth("guest")) }}>Guest</button>
            <div>Login Page</div>
        </>
    )
}
export default Login;