import React from "react";
import StateDist from "../common/stateDist";
import {
  Ptype,
  textFields,
  otherCheckBox,
  renderInput
} from "../../utility/common";
const Residential = props => {
  let type = "residential";
  return (
    <form className="needs-validation" noValidate>
      <div className="form-row">
        {Ptype(type).map(item => {
          return (
            <div
              className="mb-3 custom-radio custom-control mr-3"
              key={item.id}
            >
              {renderInput(item)}
            </div>
          );
        })}
      </div>
      <div className="form-row">
        {textFields(type).map(item => {
          if (item.custom && item.custom === "stateDist")
            return <StateDist key={item.custom} />;
          return (
            <div className="col-md-4 mb-3" key={item.id}>
              {renderInput(item)}
            </div>
          );
        })}
      </div>
      <div className="form-row">
        {otherCheckBox(type).map(item => {
          return (
            <React.Fragment key={item.label}>
              <label style={{ fontWeight: "bolder", width: "100%" }}>
                {item.label}
              </label>
              {item.checkBoxes.map(item => {
                return (
                  <div
                    className="mb-3 custom-checkbox custom-control mr-3"
                    key={item.id}
                  >
                    {renderInput(item)}
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Residential;
