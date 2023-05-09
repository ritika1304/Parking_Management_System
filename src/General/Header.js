import { Link } from "react-router-dom";

export default function Header(){
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
                <li className="nav-item "><Link to="/">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item"><Link to="/contact">
                  <a className="nav-link" href="contact.html">Contact us</a></Link>
                </li>
                <li className="nav-item"><Link to="/adminLogin">
                  <a className="nav-link" href=" "> Admin</a></Link>
                </li>
                <li className="nav-item"><Link to="/userLogin">
                  <a className="nav-link" href=" ">User</a></Link>
                </li>
                <li className="nav-item"><Link to="/register">
                  <a className="nav-link" href=" ">Register</a></Link>
                </li>
                <li className="nav-item"><Link to="">
                  <a className="nav-link" href=" ">View Vehicle Type</a></Link>
                </li>
                <li className="nav-item"><Link to="ViewParking">
                  <a className="nav-link" href="manage.js">View Parking</a></Link>
                </li>
                <li className="nav-item"><Link to="/viewSlot">
                  <a className="nav-link" href=" ">View Slot</a></Link>
                </li>
                <li className="nav-item"><Link to="/bookBooking">
                  <a className="nav-link" href=" ">Book Booking</a></Link>
                </li>
                
                
              </ul>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
    <div className="container mb-5"></div>
        </>
    )

}