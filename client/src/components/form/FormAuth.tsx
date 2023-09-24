import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";

const FormAuth: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);

    return (
        <>
            {auth}
            <div>Form</div>
        </>
    )
}
export default FormAuth;