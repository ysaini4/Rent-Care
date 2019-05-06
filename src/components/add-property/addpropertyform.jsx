import React, { Component } from "react";
import {
  getFormRow,
  getPropertyType,
  getProperyFields,
  getFormData
} from "./designServices";
import { postProperty, generateOtp } from "../../services/property";
import { toast } from "react-toastify";
import Input from "../common/input";
class AddPropertyForm extends Component {
  state = { otpSent: false };
  handleSubmit = async (e, type) => {
    try {
      e.preventDefault();
      const form = e.currentTarget;
      if (!form.checkValidity() && false) {
        form.classList.add("was-validated");
        const errObject = { msg: "Fill the form properly." };
        throw errObject;
      }
      const data = getFormData(e.target, type);
      await postProperty(data);
    } catch (err) {
      toast.error(err.msg);
    }
  };
  generateOTP = async () => {
    let res = await generateOtp();
    console.log("Here", res);
    this.setState({ otpSent: true });
  };
  render() {
    let type = getPropertyType(this.props.pTypeId);
    if (!type) return null;
    let pFields = getProperyFields(type);
    return (
      <form
        className="needs-validation"
        onSubmit={e => this.handleSubmit(e, type)}
        noValidate // noValidate is for avoid default validation of HTML
      >
        {pFields.map(item => {
          return getFormRow(type, item);
        })}
        <div className="row">
          {!this.state.otpSent ? (
            <div className="col-md-12">
              <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={this.generateOTP}
              >
                Send OTP
              </button>
            </div>
          ) : (
            <React.Fragment>
              <div className="col-md-4">
                <Input name="otp" value="" placeholder="Enter Otp" />
              </div>
              <div className="col-md-2">
                <a href="#">ReSend Otp</a>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-primary btn-sm"
                  type="submit"
                  style={{ marginTop: 10 }}
                >
                  Submit
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </form>
    );
  }
}

export default AddPropertyForm;
