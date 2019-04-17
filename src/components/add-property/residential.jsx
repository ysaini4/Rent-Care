import React from "react";
import Input from "../common/input";
import Select from "../common/select";
import Radio from "../common/radio";
import StateDist from "../common/stateDist";
import {
  selectFields,
  ptype,
  textFileds,
  textFileds2,
  windowView,
  facilities,
  nearBy
} from "../../utility/common";

const Residential = () => {
  return (
    <form className="needs-validation" noValidate>
      <div className="form-row">
        {ptype.map(item => {
          return (
            <div className="mb-3 custom-radio custom-control mr-3">
              <Radio
                type="radio"
                id={item.id}
                name="rtype"
                label={item.label}
                feedback=""
                required={true}
              />
            </div>
          );
        })}
      </div>
      <div className="form-row">
        {textFileds.map(item => {
          return (
            <div className="col-md-4 mb-3">
              <Input
                id={item.id}
                type={item.type}
                label={item.label}
                required={true}
                valid={true}
              />
            </div>
          );
        })}
        <StateDist />
        {selectFields.map(item => {
          return (
            <div className="col-md-4 mb-3">
              <Select
                id={item.id}
                label={item.label}
                required={true}
                valid={true}
                options={item.options}
              />
            </div>
          );
        })}
        {textFileds2.map(item => {
          return (
            <div className="col-md-4 mb-3">
              <Input
                id={item.id}
                type={item.type}
                label={item.label}
                required={true}
                valid={true}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}
      </div>

      <label style={{ fontWeight: "bolder" }}>Window Side View</label>
      <div className="form-row">
        {windowView.map(item => {
          return (
            <div className="mb-3 custom-checkbox custom-control mr-3">
              <Radio
                type="checkbox"
                id={item.id}
                name="rtype"
                label={item.label}
                feedback=""
                required={true}
              />
            </div>
          );
        })}
      </div>
      <label style={{ fontWeight: "bolder" }}>Facility</label>
      <div className="form-row">
        {facilities.map(item => {
          return (
            <div className="mb-3 custom-checkbox custom-control mr-3">
              <Radio
                type="checkbox"
                id={item.id}
                name="rtype"
                label={item.label}
                feedback=""
                required={true}
              />
            </div>
          );
        })}
      </div>
      <label style={{ fontWeight: "bolder" }}>Near By</label>
      <div className="form-row">
        {nearBy.map(item => {
          return (
            <div className="mb-3 custom-checkbox custom-control mr-3">
              <Radio
                type="checkbox"
                id={item.id}
                name="rtype"
                label={item.label}
                feedback=""
                required={true}
              />
            </div>
          );
        })}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit form
      </button>
    </form>
  );
};

export default Residential;
