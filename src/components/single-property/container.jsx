import React from "react";
import Input from "../common/input";
import { firstCharCapital } from "../../utility/common";
const Container = ({ pageProperty, displayFields }) => {
  console.log(pageProperty, displayFields);
  return (
    <section className="blog_area single-post-area p_120">
      <div className="container">
        <div className="row mt-80">
          <div className="col-lg-8 posts-list">
            <div className="single-post row">
              <div className="col-lg-12">
                <div className="feature-img">
                  <img
                    className="img-fluid"
                    src={pageProperty.Image}
                    alt="User"
                  />
                </div>
              </div>
              <div className="col-lg-12 col-md-12 blog_details">
                <h2>
                  {firstCharCapital(pageProperty.Property)} Property{" "}
                  <small>{pageProperty.Ptype}</small>
                </h2>
                <p style={{ fontStyle: "italic" }}>
                  This Property is Available for {pageProperty.PropertyFor}
                </p>
                <div className="row">
                  {displayFields
                    .filter(
                      item =>
                        item !== "_id" &&
                        item !== "PropertyFor" &&
                        item !== "Ptype" &&
                        item !== "Property" &&
                        item !== "MarkAsRead" &&
                        item !== "Publish" &&
                        item !== "ShowAtHome" &&
                        item !== "Image"
                    )
                    .map(item => {
                      return (
                        <React.Fragment>
                          <div className="col-sm-8">
                            <h4>{item}:</h4>
                          </div>
                          <div className="col-sm-4">
                            <h5>{pageProperty[item]}</h5>
                          </div>
                        </React.Fragment>
                      );
                    })}
                </div>
                <p className="excert" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <h4 className="">Want more details ?</h4>
            <form className="needs-validation" />
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Input placeholder="Mobile No." />
            <div className="input-group" />
            <button
              className="btn btn-sm btn-primary"
              style={{ marginTop: 20 }}
            >
              Submit
            </button>
            <p
              style={{
                marginTop: "10px",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#41535f"
              }}
            >
              Note: You can not buy/rent Property directly from the website.If
              You are intersted in this property fill these small details and
              submit. we will contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
