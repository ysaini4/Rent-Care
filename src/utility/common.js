import React from "react";
import Select from "../components/common/select";
import Input from "../components/common/input";
import Radio from "../components/common/radio";

export function sortState(a, b) {
  if (a.state.name < b.state.name) return -1;
  if (a.state.name > b.state.name) return 1;
  return 0;
}
export function sortDist(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}
export const firstCharCapital = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
export const renderInput = item => {
  let input;
  if (!item.type) {
    input = (
      <Select
        id={item.id}
        name={item.name}
        label={item.label}
        required={item.required}
        value={item.value}
        options={item.options}
        feedback={item.feedback}
      />
    );
  } else if (item.type === "radio" || item.type === "checkbox") {
    input = (
      <Radio
        type={item.type}
        id={item.id}
        value={item.value}
        name={item.name}
        label={item.label}
        required={item.required}
        feedback={item.feedback}
      />
    );
  } else {
    input = (
      <Input
        id={item.id}
        name={item.name}
        type={item.type}
        label={item.label}
        value={item.value}
        required={item.required}
        feedback={item.feedback}
        placeholder={item.placeholder}
      />
    );
  }
  return input;
};
