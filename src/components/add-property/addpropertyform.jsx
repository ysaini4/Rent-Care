import React from "react";
import {
  getFormRow,
  getPropertyType,
  getProperyFields
} from "./designServices";
const AddPropertyForm = props => {
  let type = getPropertyType(props.pTypeId);
  if (!type) return null;
  let pFields = getProperyFields(type);
  return (
    <form className="needs-validation" noValidate>
      {pFields.map(item => {
        return getFormRow(type, item);
      })}
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default AddPropertyForm;
