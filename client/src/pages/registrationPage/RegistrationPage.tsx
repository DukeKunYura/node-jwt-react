import { FC, useEffect, useState } from "react";
import { setAuth } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import FormRegistration from "../../components/form/FormRegistration";
import { setActiveLink } from "../../redux/slices/masterSlice";
import { useRefreshQuery } from "../../api/loginApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";

const RegistrationPage: FC = () => {
    const [click, setClick] = useState<null | boolean>(null);
    const { data } = useRefreshQuery(click ?? skipToken);
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
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => { setClick(true) }}>local</button>
        </div>
    )
}
export default RegistrationPage;