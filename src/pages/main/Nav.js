import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaQuestionCircle } from "react-icons/fa";
const Nav = () => {

    return (
        
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" aria-current="page">
                                <FaHome className="feather"/>
                                    Dashboard
                            </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/about" className="nav-link">

                                <FaQuestionCircle className="feather"/>
                                    About
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="shopping-cart"></span>
                                    Products
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="users"></span>
                                    Customers
                                </a>
                            </li>

                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>Saved Report</span>
                            <a className="link-secondary" href="#">
                                <span data-feather="plus-circle"></span>
                            </a>

                        </h6>

                    </div>


                </nav>

    )

}


export default Nav;