import React from "react";
import Input from "../common/input";
import Radio from "../common/radio";
import Select from "../common/select";

import StateDist from "../common/stateDist";
import {
  hTextFileds,
  textFileds3,
  pgTextFileds3,
  imageFiled,
  hFacilities,
  rrSelectFields,
  nearBy
} from "../../utility/common";
const Restaurant = props => {
  return (
    <form className="needs-validation" noValidate>
      <div className="form-row">
        {hTextFileds.map(item => {
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
        {textFileds3.map(item => {
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

        {rrSelectFields.map(item => {
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
        {pgTextFileds3.map(item => {
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
        {imageFiled.map(item => {
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
      <label style={{ fontWeight: "bolder" }}>Facility</label>
      <div className="form-row">
        {hFacilities.map(item => {
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
      <label style={{ fontWeight: "bolder" }}>
        Near By(Under 5 Kilometers)
      </label>
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

export default Restaurant;
