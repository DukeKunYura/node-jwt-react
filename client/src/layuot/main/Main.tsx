import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/homePage/HomePage";
import LoginPage from "../../pages/loginPage/LoginPage";
import Privat from "../../hoc/Privat";
import PersonPage from "../../pages/personPage/PersonPage";
import TestSkip from "../../pages/testSkip/TestSkip";
import NoMatchPage from "../../pages/noMatch/NoMatchPage";
import RegistrationPage from "../../pages/registrationPage/RegistrationPage";

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="registration" element={<RegistrationPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="person" element={<PersonPage />} />
            <Route path="test" element={
                <Privat>
                    <TestSkip />
                </Privat>
            } />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>


    )
}

export default Main;