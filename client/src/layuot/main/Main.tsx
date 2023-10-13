import { FC, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import Privat from "../../hoc/Privat";
import PersonPage from "../../pages/personPage/PersonPage";
import NoMatchPage from "../../pages/noMatch/NoMatchPage";
import RegistrationPage from "../../pages/registrationPage/RegistrationPage";
import PostsPage from "../../pages/postsPage/PostsPage";
import { useAppDispatch } from "../../redux/hooks";
import { checkAuth } from "../../services/authService";
import { setRole, setUser } from "../../redux/slices/authSlice";
import PostPage from "../../pages/postPage/PostPage";
import DnDPage from "../../pages/dndPage/DnDPage";

const Main: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const checker = async () => {
            const response = await checkAuth();
            if (response) {
                localStorage.setItem('token', response.data.accessToken);
                dispatch(setUser(response.data.user));
                dispatch(setRole('user'));
            }
        }
        checker();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="person" element={<Privat><PersonPage /></Privat>} />
            <Route path="posts" element={<Privat><PostsPage /></Privat>} />
            <Route path="posts/:id" element={<Privat><PostPage /></Privat>} />
            <Route path="dnd" element={<Privat><DnDPage /></Privat>} />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>


    )
}

export default Main;