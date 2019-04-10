import React from "react";

const PropertyArea = () => {
  let a = [1, 2, 3, 4, 5];
  return (
    <section className="property-area section-gap relative" id="property">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10 header-text">
            <h1>Properties in Various Cities</h1>
            <p>Who are in extremely love with eco friendly system.</p>
          </div>
        </div>
        <div className="row">
          {a.map(item => {
            return (
              <div key={item} className="col-lg-4">
                <div className="single-property">
                  <div className="images">
                    <img
                      className="img-fluid mx-auto d-block"
                      src="img/s1.jpg"
                      alt=""
                    />
                    <span>For Sale</span>
                  </div>

                  <div className="desc">
                    <div className="top d-flex justify-content-between">
                      <h4>
                        <a href="/">04 Bed Duplex</a>
                      </h4>
                      <h4>$3.5M</h4>
                    </div>
                    <div className="middle">
                      <div className="d-flex justify-content-start">
                        <p>Bed: 04</p>
                        <p>Bath: 03</p>
                        <p>Area: 750sqm</p>
                      </div>
                      <div className="d-flex justify-content-start">
                        <p>
                          Pool: <span className="gr">Yes</span>
                        </p>
                        <p>
                          Internet: <span className="rd">No</span>
                        </p>
                        <p>
                          Cleaning: <span className="rd">No</span>
                        </p>
                      </div>
                    </div>
                    <div className="bottom d-flex justify-content-start">
                      <p>
                        <span className="lnr lnr-heart" /> 15 Likes
                      </p>
                      <p>
                        <span className="lnr lnr-bubble" /> 02 Comments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-lg-4">
            <div className="single-property">
              <div className="images">
                <img
                  className="img-fluid mx-auto d-block"
                  src="img/s2	.jpg"
                  alt=""
                />
                <span>For Sale</span>
              </div>

              <div className="desc">
                <div className="top d-flex justify-content-between">
                  <h4>
                    <a href="/">04 Bed Duplex</a>
                  </h4>
                  <h4>$3.5M</h4>
                </div>
                <div className="middle">
                  <div className="d-flex justify-content-start">
                    <p>Bed: 04</p>
                    <p>Bath: 03</p>
                    <p>Area: 750sqm</p>
                  </div>
                  <div className="d-flex justify-content-start">
                    <p>
                      Pool: <span className="gr">Yes</span>
                    </p>
                    <p>
                      Internet: <span className="rd">No</span>
                    </p>
                    <p>
                      Cleaning: <span className="rd">No</span>
                    </p>
                  </div>
                </div>
                <div className="bottom d-flex justify-content-start">
                  <p>
                    <span className="lnr lnr-heart" /> 15 Likes
                  </p>
                  <p>
                    <span className="lnr lnr-bubble" /> 02 Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="single-property">
              <div className="images">
                <img
                  className="img-fluid mx-auto d-block"
                  src="img/s3.jpg"
                  alt=""
                />
                <span>For Sale</span>
              </div>

              <div className="desc">
                <div className="top d-flex justify-content-between">
                  <h4>
                    <a href="/">04 Bed Duplex</a>
                  </h4>
                  <h4>$3.5M</h4>
                </div>
                <div className="middle">
                  <div className="d-flex justify-content-start">
                    <p>Bed: 04</p>
                    <p>Bath: 03</p>
                    <p>Area: 750sqm</p>
                  </div>
                  <div className="d-flex justify-content-start">
                    <p>
                      Pool: <span className="gr">Yes</span>
                    </p>
                    <p>
                      Internet: <span className="rd">No</span>
                    </p>
                    <p>
                      Cleaning: <span className="rd">No</span>
                    </p>
                  </div>
                </div>
                <div className="bottom d-flex justify-content-start">
                  <p>
                    <span className="lnr lnr-heart" /> 15 Likes
                  </p>
                  <p>
                    <span className="lnr lnr-bubble" /> 02 Comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyArea;
