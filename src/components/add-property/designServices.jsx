import React from "react";
import { renderInput } from "../../utility/common";

import StateDist from "../common/stateDist";
import {
  propertyTypes,
  pFormRows,
  Ptype,
  textFields,
  otherCheckBox
} from "./designData";

export const getPropertyType = pId => {
  return propertyTypes.find(item => {
    return item.id === pId;
  }).type;
};

export const getProperyFields = type => {
  if (
    type === "corporate" ||
    type === "commercial" ||
    type === "residential" ||
    type === "pg"
  ) {
    return [
      pFormRows.typeRow1,
      pFormRows.textFieldsRow1,
      pFormRows.checkBoxRow1
    ];
  } else if (type === "hotel" || type === "restaurant") {
    return [pFormRows.textFieldsRow1, pFormRows.checkBoxRow1];
  }
};

export const getFormRow = (type, pField) => {
  if (pField === pFormRows.typeRow1) {
    return typeRow1(type, pField);
  }
  if (pField === pFormRows.textFieldsRow1) {
    return textFieldsRow1(type, pField);
  }
  if (pField === pFormRows.checkBoxRow1) {
    return checkBoxRow1(type, pField);
  }
  return null;
};
export const getFormData = (data, type) => {
  let returnData = { Property: type };
  let checkboxfields = otherCheckBox(type);
  checkboxfields.forEach(item => {
    returnData[item.id] = [];
  });
  const formData = new FormData(data);
  for (let pair of formData.entries()) {
    let checkBoxId = checkForCheckBox(pair, checkboxfields);
    if (!checkBoxId) returnData[pair[0]] = pair[1];
    else returnData[checkBoxId][pair[0]] = pair[1];
  }
  return returnData;
};
/******************************** Private Methods **************************/
const checkForCheckBox = (pair, checkboxfields) => {
  let checkBox = checkboxfields.find(cItem => {
    let ischeckBox = cItem.checkBoxes.find(item => {
      return item.name === pair[0];
    });
    if (ischeckBox) return true;
    return false;
  });
  if (checkBox) return checkBox.id;
  return null;
};
const typeRow1 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
      {Ptype(type).map(item => {
        return (
          <div className="mb-3 custom-radio custom-control mr-3" key={item.id}>
            {renderInput(item)}
          </div>
        );
      })}
    </div>
  );
};
const textFieldsRow1 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
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
};
const checkBoxRow1 = (type, pField) => {
  return (
    <div className="form-row" key={pField}>
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
};
