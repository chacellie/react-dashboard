import { FaHome } from 'react-icons/fa';

const Nav = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <FaHome className="feather"/>
                                    Dashboard
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file"></span>
                                    Orders
                                </a>
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
            </div>
        </div>
    )

}


export default Nav;