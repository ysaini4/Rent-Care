import React, { Component } from "react";
import {
  getFormRow,
  getPropertyType,
  getProperyFields,
  getFormData
} from "./designServices";
class AddPropertyForm extends Component {
  state = {};
  handleSubmit = (e, type) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.classList.add("was-validated");
    const data = getFormData(e.target, type);
    console.log(data, form.checkValidity());
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
