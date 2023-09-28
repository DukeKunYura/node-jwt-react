import { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";


type Props = {
    children: JSX.Element;
};

const Privat: FC<Props> = (props: Props) => {
    const location = useLocation();
    const role = useAppSelector((state) => state.auth.role);

    if (role === "guest") {
        return <Navigate to='/login' state={{ from: location }} />

    };

    return props.children;
}
export default Privat;