import { FC, useEffect, useState } from "react";
import { setRole } from "../../redux/slices/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import FormRegistration from "../../components/form/FormRegistration";
import { setActiveLink } from "../../redux/slices/masterSlice";
import { useRefreshQuery } from "../../api/loginApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { login } from "../../services/authService";

const RegistrationPage: FC = () => {
    const [click, setClick] = useState<null | boolean>(null);
    const { data } = useRefreshQuery(click ?? skipToken);
    const dispatch = useAppDispatch();

    const testClick = () => {
        console.log("нажал");
        setClick(true);
        //login();
    }

    useEffect(() => {
        dispatch(setActiveLink("Login"));
    }, []);

    return (
        <div className="container">
            <FormRegistration />
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => { dispatch(setRole("admin")) }}>Admin</button>
            <button
                type="button"
                className="btn btn-warning"
                onClick={() => { dispatch(setRole("guest")) }}>Guest</button>
            <button
                type="button"
                className="btn btn-warning"
                onClick={testClick}>test</button>
        </div>
    )
}
export default RegistrationPage;