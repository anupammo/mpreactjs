// import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="bg-dark text-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav justify-content-center fs-4 mt-3">
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#"><i className="bi bi-linkedin"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#"><i className="bi bi-facebook"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#"><i className="bi bi-twitter-x"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-3">Brand &copy; 2024</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;