import { FC } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setActiveLink } from "../redux/slices/masterSlice";


type Props = {
    children: JSX.Element;
};

const Privat: FC<Props> = (props: Props) => {
    const location = useLocation();
    const auth = useAppSelector((state) => state.auth.auth);
    const dispatch = useAppDispatch();

    if (auth === "guest") {
        dispatch(setActiveLink("Login"));
        return <Navigate to='/login' state={{ from: location }} />

    };



    return props.children;
}
export default Privat;