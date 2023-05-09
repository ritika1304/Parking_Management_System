import { Link } from "react-router-dom";

export default function AHeader(){
    return(
        <>
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="index.html">
                        <span>
                          Autospan
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
                        <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item "><Link to="/admin">
                                    <a className="nav-link" href="addParking.js">Dashboard<span className="sr-only">(current)</span></a>
                                    </Link>
                                </li>
                                <li className="nav-item "><Link to="addParking">
                                    <a className="nav-link" href="about.html">AddParking</a></Link>
                                </li>
                                <li className="nav-item"><Link to="addCity">
                                    <a className="nav-link" href="addCity.js">Add City</a></Link>
                                </li>
                                <li className="nav-item"><Link to="viewCity">
                                    <a className="nav-link" href="viewCity.js">View City</a></Link>
                                </li>
                                <li className="nav-item"><Link to="addSlots">
                                    <a className="nav-link" href="addSlots.js">Add Slots</a></Link>
                                </li>
                                <li className="nav-item"><Link to="ViewParking">
                                    <a className="nav-link" href="manage.js">View Parking</a></Link>
                                </li>
                                <li className="nav-item"><Link to="viewBooking">
                                    <a className="nav-link" href="viewBooking.js">View Bookings</a></Link>
                                </li>
                                <li className="nav-item"><Link to="viewUser">
                                    <a className="nav-link" href="ViewUser">View User</a></Link>
                                </li>
                            </ul>
                            
                            <form className="form-inline my-lg-0 ml-0 ml-lg-4 mb-lg-0">
                                <button className="btn   nav_search-btn" type="submit"></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        <div className="container my-5 p-2" ></div>
        </>
    )

}