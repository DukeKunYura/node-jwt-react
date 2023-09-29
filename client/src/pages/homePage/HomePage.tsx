import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveLink } from "../../redux/slices/masterSlice";

const Home: FC = () => {
    const role = useAppSelector((state) => state.auth.role);
    const email = useAppSelector((state) => state.auth.user.email);
    const isActivated = useAppSelector((state) => state.auth.user.isActivated);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setActiveLink("Home"));
    }, []);

    return (
        <>
            {!isActivated && role !== "guest" && "активируйте аккаунт"}<br />
            {role}<br />
            {email}
            <div>Home Page</div>
        </>
    )
}
export default Home;