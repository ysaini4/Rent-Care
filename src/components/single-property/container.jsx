import React, { Component } from "react";
import { firstCharCapital, generateOTP, verifyOTP } from "../../utility/common";
import { toast } from "react-toastify";
import { addBuyer } from "../../services/property";
class Container extends Component {
  state = {
    otpSent: false,
    name: "",
    email: "",
    mobile: "",
    otp: "",
    designation: "",
    cname: "",
    rname: ""
  };
  handleSubmit = async () => {
    try {
      if (!this.state.otpSent) {
        await generateOTP(this.state.mobile);
        this.setState({ otpSent: true });
        return;
      } else {
        const { name, email, mobile, cname, rname, designation } = this.state;
        await verifyOTP(this.state.mobile, this.state.otp);
        const data = {
          Name: name,
          Email: email,
          Mobile: mobile,
          pId: this.props.pageProperty._id
        };
        const type = this.props.pageProperty.Property;
        if (type === "corporate" || type === "commercial") {
          data["Company Name"] = cname;
          data["Reference Name"] = rname;
          data["Designation"] = designation;
        }
        let res = await addBuyer(data);
        console.log(res);
      }
    } catch (err) {
      toast.error(err.msg);
    }
  };
  getcustomFields(type) {
    if (type === "corporate" || type === "commercial") {
      const { designation, cname, rname } = this.state;
      return (
        <React.Fragment>
          <input
            className="form-control"
            placeholder="Company Name"
            name="Company Name"
            value={cname}
            onChange={({ currentTarget: input }) => {
              this.setState({ cname: input.value });
            }}
          />
          <input
            className="form-control"
            placeholder="Reference Name"
            name="Reference Name"
            value={rname}
            onChange={({ currentTarget: input }) => {
              this.setState({ rname: input.value });
            }}
          />
          <input
            className="form-control"
            placeholder="Designation"
            name="Designation"
            value={designation}
            onChange={({ currentTarget: input }) => {
              this.setState({ designation: input.value });
            }}
          />
        </React.Fragment>
      );
    }
    return null;
  }
  render() {
    const { pageProperty, displayFields } = this.props;
    const { name, email, mobile, otp } = this.state;
    return (
      <section className=" single-post-area p_120">
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
                          item !== "Image" &&
                          item !== "Email" &&
                          item !== "Mobile" &&
                          item !== "Refrance Person" &&
                          item !== "PG Name" &&
                          item !== "Name" &&
                          item !== "Designation" &&
                          item !== "Company Name" &&
                          item !== "Refrance Name" &&
                          item !== "Restaurant Name"
                      )
                      .map(item => {
                        return (
                          <React.Fragment key={item}>
                            <div className="col-sm-8">
                              <h4>{item}:</h4>
                            </div>
                            <div className="col-sm-4">
                              <h5>
                                {pageProperty[item] ? (
                                  pageProperty[item] === true ? (
                                    <p style={{ color: "green " }}>Yes</p>
                                  ) : (
                                    pageProperty[item]
                                  )
                                ) : (
                                  <p style={{ color: "red" }}>No</p>
                                )}
                              </h5>
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
              {this.getcustomFields(pageProperty.Property)}
              <input
                className="form-control"
                placeholder="Name"
                name="Name"
                value={name}
                onChange={({ currentTarget: input }) => {
                  this.setState({ name: input.value });
                }}
              />
              <input
                className="form-control"
                placeholder="Email"
                name="Email"
                value={email}
                onChange={({ currentTarget: input }) => {
                  this.setState({ email: input.value });
                }}
              />
              <input
                className="form-control"
                placeholder="Mobile No."
                name="Mobile"
                value={mobile}
                onChange={({ currentTarget: input }) => {
                  this.setState({ mobile: input.value });
                }}
              />
              {this.state.otpSent ? (
                <input
                  className="form-control"
                  placeholder="OTP"
                  name="otp"
                  value={otp}
                  onChange={({ currentTarget: input }) => {
                    this.setState({ otp: input.value });
                  }}
                />
              ) : null}
              <div className="input-group" />
              <button
                className="btn btn-sm btn-primary"
                style={{ marginTop: 20 }}
                onClick={this.handleSubmit}
              >
                {!this.state.otpSent ? "Send OTP" : "Submit"}
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
  }
}

export default Container;
