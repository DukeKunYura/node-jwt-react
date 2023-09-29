import { FC, useEffect } from "react";
import FormAuth from "../../components/form/FormAuth";
import { useAppDispatch } from "../../redux/hooks";
import { setActiveLink } from "../../redux/slices/masterSlice";

const LoginPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setActiveLink("Login"));
    }, []);

    return (
        <div className="container">
            <FormAuth />
        </div>
    )
}
export default LoginPage;