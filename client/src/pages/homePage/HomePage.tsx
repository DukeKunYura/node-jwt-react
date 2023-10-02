import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setActiveLink } from "../../redux/slices/masterSlice";
import img from "../../img/slide.png"

const Home: FC = () => {
    const role = useAppSelector((state) => state.auth.role);
    const email = useAppSelector((state) => state.auth.user.email);
    const isActivated = useAppSelector((state) => state.auth.user.isActivated);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setActiveLink("Home"));
    }, []);

    return (
        <div className="container">
            <br />
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2>Role: {role}</h2>
                            <p>
                                {!isActivated && role !== "guest" && "активируйте аккаунт"}
                                {isActivated && "аккаунт активирован"}
                            </p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h2>{email && "Email: " + email}</h2>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Home;