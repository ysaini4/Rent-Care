import React from "react";
import StateDist from "../common/stateDist";
import {
  Ptype,
  textFields,
  otherCheckBox,
  renderInput,
  getPropertyType,
  addProperyFields
} from "../../utility/common";
const AddPropertyForm = props => {
  let type = getPropertyType(props.pTypeId);
  if (!type) return null;
  let pFields = addProperyFields(type);
  console.log(pFields);
  let pTypeRow = (
    <div className="form-row">
      {Ptype(type).map(item => {
        return (
          <div className="mb-3 custom-radio custom-control mr-3" key={item.id}>
            {renderInput(item)}
          </div>
        );
      })}
    </div>
  );
  let textFieldsRow = (
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
  );
  let otherCheckBoxRow = (
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
  );
  return (
    <form className="needs-validation" noValidate>
      {pFields.map(item => {
        if (item === "Ptype") {
          return pTypeRow;
        }
        if (item === "textFields") {
          return textFieldsRow;
        }
        if (item === "otherCheckBox") {
          return otherCheckBoxRow;
        }
      })}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddPropertyForm;
