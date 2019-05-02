import React, { Component } from "react";
import {
  getFormRow,
  getPropertyType,
  getProperyFields,
  getFormData
} from "./designServices";
import { postProperty } from "../../services/property";
import { toast } from "react-toastify";
class AddPropertyForm extends Component {
  state = {};
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
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default AddPropertyForm;
