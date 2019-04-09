import React from "react";

const Banner = () => {
  return (
    <section className="home-banner-area relative" id="home">
      <div className="overlay overlay-bg" />
      <div className="container">
        <div className="row fullscreen align-items-end justify-content-center">
          <div className="banner-content col-lg-12 col-md-12">
            {/* <h1>We Care Where You Live</h1> */}
            <div className="search-field">
              <form className="search-form" action="#">
                <div className="row">
                  <div className="col-lg-12 d-flex align-items-center justify-content-center toggle-wrap">
                    <div className="row">
                      <div className="col">
                        <h4 className="search-title">Search Properties For</h4>
                      </div>
                      <div className="col">
                        <div className="onoffswitch3 d-block mx-auto">
                          <input
                            type="checkbox"
                            name="onoffswitch3"
                            className="onoffswitch3-checkbox"
                            id="myonoffswitch3"
                          />
                          <label
                            className="onoffswitch3-label"
                            htmlFor="myonoffswitch3"
                          >
                            <span className="onoffswitch3-inner">
                              <span className="onoffswitch3-active">
                                <span className="onoffswitch3-switch">
                                  Sell
                                </span>
                                <span className="lnr lnr-arrow-right" />
                              </span>
                              <span className="onoffswitch3-inactive">
                                <span className="lnr lnr-arrow-left" />
                                <span className="onoffswitch3-switch">
                                  Rent
                                </span>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-6">
                    <select
                      name="location"
                      className="app-select form-control"
                      required
                    >
                      <option data-display="Choose locations">
                        Choose locations
                      </option>
                      <option value="1">Dhaka</option>
                      <option value="2">Rangpur</option>
                      <option value="3">Bogra</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-6">
                    <select
                      name="property-type"
                      className="app-select form-control"
                      required
                    >
                      <option data-display="Property Type">
                        Property Type
                      </option>
                      <option value="1">Property type 1</option>
                      <option value="2">Property type 2</option>
                      <option value="3">Property type 3</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-6">
                    <select
                      name="bedroom"
                      className="app-select form-control"
                      required
                    >
                      <option data-display="Bedrooms">Bedrooms</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-6 col-xs-6">
                    <select
                      name="bedroom"
                      className="app-select form-control"
                      required
                    >
                      <option data-display="Bedrooms">Bedrooms</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="col-lg-4 range-wrap">
                    <p>Price Range($):</p>
                    <input type="text" id="range" name="range" />
                  </div>
                  <div className="col-lg-4 range-wrap">
                    <p>Area Range(sqm):</p>
                    <input type="text" id="range2" name="range" />
                  </div>
                  <div className="col-lg-4 d-flex justify-content-end">
                    <button className="primary-btn">
                      Search Properties
                      <span className="lnr lnr-arrow-right" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
