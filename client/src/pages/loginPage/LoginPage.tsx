import { FC, useEffect } from "react";
import FormAuth from "../../components/form/FormAuth";
import { setAuth } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { setActiveLink } from "../../redux/slices/masterSlice";

const LoginPage: FC = () => {
    //const auth = useAppSelector((state) => state.auth.auth);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setActiveLink("Login"));
    }, []);

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
export default LoginPage;