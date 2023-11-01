import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setActiveLink } from '../../redux/slices/masterSlice';
import { NavLink } from 'react-router-dom';
import { logout } from '../../services/authService';
import { setRole, setUser } from '../../redux/slices/authSlice';
import { TUser } from '../../interfaces/interfaces';

const Header: FC = () => {
    const activeLink = useAppSelector((state) => state.master.activeLink);
    const role = useAppSelector((state) => state.auth.role);
    const isActivated = useAppSelector((state) => state.auth.user.isActivated);
    const email = useAppSelector((state) => state.auth.user.email);
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        const response = await logout();
        if (response) {
            localStorage.removeItem('token');
            dispatch(setRole('guest'));
            dispatch(setUser({} as TUser));
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/"
                        onClick={() => {
                            dispatch(setActiveLink('Home'));
                        }}
                    >
                        Navbar
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    className={
                                        activeLink === 'Home'
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                    to="/home"
                                    onClick={() => {
                                        dispatch(setActiveLink('Home'));
                                    }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={
                                        activeLink === 'Person'
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                    to="/person"
                                    onClick={() => {
                                        dispatch(setActiveLink('Person'));
                                    }}
                                >
                                    Person
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={
                                        activeLink === 'Posts'
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                    to="/posts"
                                    onClick={() => {
                                        dispatch(setActiveLink('Posts'));
                                    }}
                                >
                                    Posts
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={
                                        activeLink === 'DnD'
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                    to="/dnd"
                                    onClick={() => {
                                        dispatch(setActiveLink('DnD'));
                                    }}
                                >
                                    DnD
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={
                                        activeLink === 'SandBox'
                                            ? 'nav-link active'
                                            : 'nav-link'
                                    }
                                    to="/sandbox"
                                    onClick={() => {
                                        dispatch(setActiveLink('SandBox'));
                                    }}
                                >
                                    Sandbox
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active">
                                    {isActivated && role !== 'guest' && email}
                                </a>
                            </li>
                            {role === 'guest' ? (
                                <li className="nav-item">
                                    <NavLink
                                        className={
                                            activeLink === 'Login'
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                        to="/login"
                                        onClick={() => {
                                            dispatch(setActiveLink('Login'));
                                        }}
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <NavLink
                                        className={
                                            activeLink === 'Login'
                                                ? 'nav-link active'
                                                : 'nav-link'
                                        }
                                        to=""
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            )}
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control form-control-sm"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-dark" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Header;
