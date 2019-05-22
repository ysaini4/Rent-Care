import React from "react";
import { Link } from "react-router-dom";
import mobileToggle from "../utility/mobileToggle";
const Header = () => {
  return (
    //Start Header Area
    <header className="default-header">
      <div className="menutop-wrap">
        <div className="menu-top container">
          {/* <div className="d-flex justify-content-end align-items-center">
            <ul className="list">
              <li>
                <Link to="tel:++880 1234 654 953">+880 1234 654 953</Link>
              </li>
              <li>
                <Link to="#">Sell / Rent Property</Link>
              </li>
              <li>
                <Link to="#">login / register</Link>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="main-menu">
        <div className="container">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <Link to="index.html">
                <img
                  src="img/logo.jpeg"
                  alt=""
                  title=""
                  style={{ width: 140 }}
                />
              </Link>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/addproperty">Add properties</Link>
                </li>
                <li>
                  <Link to="/requestproperty">Request properties</Link>
                </li>
                <li>
                  <Link to="/addproperty/4">PG/Hostel</Link>
                </li>
                <li>
                  <Link to="/addproperty/5">Hotel</Link>
                </li>
                <li>
                  <Link to="/addproperty/6">Restaurant</Link>
                </li>
                {/* <li className="menu-has-children">
                  <Link to="">blog</Link>
                  <ul>
                    <li>
                      <Link to="blog-home.html">Buy properties</Link>
                    </li>
                    <li>
                      <Link to="single-blog.html">Sell properties</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <Link to="">Pages</Link>
                  <ul>
                    <li>
                      <Link to="agents.html">Agents</Link>
                    </li>
                    <li>
                      <Link to="elements.html">Elements</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="contact.html">Contact</Link>
                </li> */}
              </ul>
            </nav>
            {/* <!--######## #nav-menu-container --> */}
          </div>
        </div>
      </div>
      <nav id="mobile-nav">
        <ul className="" id="">
          <li className="menu-active">
            <Link to="/home" onClick={mobileToggle}>
              home
            </Link>
          </li>
          <li>
            <Link to="/addproperty" onClick={mobileToggle}>
              Add properties
            </Link>
          </li>
          <li>
            <Link to="/home" onClick={mobileToggle}>
              Rent properties
            </Link>
          </li>
          <li>
            <Link to="/home" onClick={mobileToggle}>
              Buy properties
            </Link>
          </li>
          <li>
            <Link to="/home" onClick={mobileToggle}>
              Sell properties
            </Link>
          </li>
        </ul>
      </nav>
      <button type="button" id="mobile-nav-toggle" onClick={mobileToggle}>
        <i className="lnr lnr-menu" />
      </button>
      <div id="mobile-body-overly" style={{ display: "none" }} />
    </header>
  );
  //<!-- End Header Area --> );
};

export default Header;
