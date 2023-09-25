import { FC, useEffect } from "react";
import { setAuth } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import FormRegistration from "../../components/form/FormRegistration";
import { setActiveLink } from "../../redux/slices/masterSlice";

const RegistrationPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setActiveLink("Login"));
    }, []);

    return (
        <div className="container">
            <FormRegistration />
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
export default RegistrationPage;