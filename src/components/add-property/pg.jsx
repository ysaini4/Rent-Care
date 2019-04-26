import React from "react";
import Input from "../common/input";
import Radio from "../common/radio";
import Select from "../common/select";

import StateDist from "../common/stateDist";
import {
  pgtype,
  pgTextFileds,
  textFileds3,
  pgSelectFields,
  pgTextFileds2,
  pgTextFileds3,
  imageFiled,
  pgFacilities,
  nearBy
} from "../../utility/common";
const PG = props => {
  let type = "pg";

  return (
    <form className="needs-validation" noValidate>
      <div className="form-row">
        {pgtype.map(item => {
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
        {pgTextFileds.map(item => {
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

        {pgSelectFields.map(item => {
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
        {pgTextFileds2.map(item => {
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
        {pgFacilities.map(item => {
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

export default PG;
