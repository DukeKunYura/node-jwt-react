import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveLink } from "../../redux/slices/masterSlice";

const Home: FC = () => {
    const role = useAppSelector((state) => state.auth.role);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setActiveLink("Home"));
    }, []);

    return (
        <>
            {role}
            <div>Home Page</div>
        </>
    )
}
export default Home;