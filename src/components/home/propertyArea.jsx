import React from "react";
import { firstCharCapital } from "../../utility/common";
import { propertyBox } from "./designData";

const PropertyArea = ({ properties }) => {
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
          {properties.map(item => {
            let content = propertyBox(item.Property);
            return (
              <div key={item._id} className="col-lg-4">
                <div className="single-property">
                  <div className="images">
                    <img
                      className="img-fluid mx-auto d-block"
                      src={item.Image}
                      alt=""
                    />
                    <span>{item.PropertyFor}</span>
                  </div>

                  <div className="desc">
                    <div className="top d-flex justify-content-between">
                      <h4>
                        <span>{firstCharCapital(item.Property)} </span>
                        <small> {item["Ptype"]}</small>
                      </h4>
                      <h4 style={{ fontFamily: "inherit" }}>
                        &#x20b9; {item.Budget} /-
                      </h4>
                    </div>
                    <div className="middle">
                      <div className="d-flex justify-content-start">
                        {content.content1.map(cnt => {
                          return (
                            <p key={cnt}>
                              {cnt}: {item[cnt]}
                            </p>
                          );
                        })}
                        {/* <p>Bath: 03</p> */}
                        {/* <p>Area: 750sqm</p> */}
                      </div>
                      <div className="d-flex justify-content-start">
                        {content.content2.map(cnt => {
                          if (item[cnt])
                            return (
                              <p key={cnt}>
                                {cnt}: <span className="gr">Yes</span>
                              </p>
                            );
                          return (
                            <p key={cnt}>
                              {cnt}: <span className="rd">No</span>
                            </p>
                          );
                        })}
                        {/* <p>
                          Pool: <span className="gr">Yes</span>
                        </p>
                        <p>
                          Internet: <span className="rd">No</span>
                        </p>
                        <p>
                          Cleaning: <span className="rd">No</span>
                        </p> */}
                      </div>
                    </div>
                    <div className="bottom d-flex justify-content-start">
                      <p>
                        {/* <span className="lnr lnr-heart" />{" "} */}
                        <button className={"btn btn-primary btn-sm"}>
                          More Info
                        </button>
                      </p>
                      <p>
                        {/* <span className="lnr lnr-bubble" /> 02 Comments */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PropertyArea;
