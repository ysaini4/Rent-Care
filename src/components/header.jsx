import React from "react";

const Header = () => {
  return (
    //Start Header Area
    <header className="default-header">
      <div className="menutop-wrap">
        <div className="menu-top container">
          {/* <div className="d-flex justify-content-end align-items-center">
            <ul className="list">
              <li>
                <a href="tel:++880 1234 654 953">+880 1234 654 953</a>
              </li>
              <li>
                <a href="#">Sell / Rent Property</a>
              </li>
              <li>
                <a href="#">login / register</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      <div className="main-menu">
        <div className="container">
          <div className="row align-items-center justify-content-between d-flex">
            <div id="logo">
              <a href="index.html">
                <img
                  src="img/logo.png"
                  alt=""
                  title=""
                  style={{ width: 140 }}
                />
              </a>
            </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li className="menu-active">
                  <a href="index.html">home</a>
                </li>
                <li>
                  <a href="properties.html">Add properties</a>
                </li>
                <li>
                  <a href="about.html">Rent properties</a>
                </li>
                <li>
                  <a href="about.html">Buy properties</a>
                </li>
                <li>
                  <a href="about.html">Sell properties</a>
                </li>
                {/* <li className="menu-has-children">
                  <a href="">blog</a>
                  <ul>
                    <li>
                      <a href="blog-home.html">Buy properties</a>
                    </li>
                    <li>
                      <a href="single-blog.html">Sell properties</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-has-children">
                  <a href="">Pages</a>
                  <ul>
                    <li>
                      <a href="agents.html">Agents</a>
                    </li>
                    <li>
                      <a href="elements.html">Elements</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li> */}
              </ul>
            </nav>
            {/* <!--######## #nav-menu-container --> */}
          </div>
        </div>
      </div>
    </header>
  );
  //<!-- End Header Area --> );
};

export default Header;
