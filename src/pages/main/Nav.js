import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaQuestionCircle } from "react-icons/fa";
const Nav = () => {

    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <NavLink to="/" className="nav-link" activeClassName="active" aria-current="page">
                <FaHome className="feather" />
                Home
            </NavLink>
            <div className="accordion" id="accordion">
                <div className="accordion-item">
                    <span className="accordion-header" id="headingOne" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            프론트엔드
                        </button>
                    </span>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                        <div class="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <NavLink to="/about" className="nav-link" activeClassName="active" >
                                        <FaQuestionCircle className="feather" />
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}


export default Nav;