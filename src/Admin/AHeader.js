import { Link } from "react-router-dom";

export default function AHeader() {
    return (
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
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/admin">
                                            <a className="nav-link" href="addParking.js">Dashboard<span className="sr-only">(current)</span></a>
                                        </Link>
                                    </li>
                                    {/* 
                                    <li className="nav-item"><Link to="UpdateParking">
                                        <a className="nav-link" href="manage.js">Update Parking</a></Link>
                                    </li>

                                    <li className="nav-item"><Link to="updateCity">
                                        <a className="nav-link" href="updateCity.js">Update City</a></Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Parking
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link to="addParking">
                                                    <a className="dropdown-item" href="about.html">AddParking</a></Link>
                                                <Link to="ViewParking">
                                                    <a className="dropdown-item" href="manage.js">View Parking</a></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                City
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <Link to="addCity">
                                                    <a className="dropdown-item" href="about.html">Add City</a></Link>
                                                <Link to="ViewCity">
                                                    <a className="dropdown-item" href="manage.js">View City</a></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Slot
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to="addSlots">
                                                    <a className="dropdown-item" href="addSlots.js">Add Slots</a></Link>
                                                <Link to="ViewSlots">
                                                    <a className="dropdown-item" href="manage.js">View Slots</a></Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="dropdown">
                                            <button className="btn text-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                User
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <Link to="addSlots">
                                                    <a className="dropdown-item" href="addSlots.js">Add User</a></Link>
                                                <Link to="ViewSlots">
                                                    <a className="dropdown-item" href="manage.js">View User</a></Link>
                                            </div>
                                        </div>
                                    </li>
                                   
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="container my-5 p-2" ></div>
        </>
    )

}