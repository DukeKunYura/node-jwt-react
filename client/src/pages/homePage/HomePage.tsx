import { FC } from "react";
import { useAppSelector } from "../../redux/hooks";

const Home: FC = () => {
    const auth = useAppSelector((state) => state.auth.auth);

    return (
        <>
            {auth}
            <div>Home Page</div>
        </>
    )
}
export default Home;