import { FC, useEffect } from "react";
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
        </div>
    )
}
export default RegistrationPage;